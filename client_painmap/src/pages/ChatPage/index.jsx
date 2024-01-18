import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "../../components/Chat";
import axios from "axios";

import './style.css'

const socket = io.connect("http://localhost:5000");

function ChatPage() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [isStaff, setIsStaff] = useState(true)

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      const data = { room: room, username: username }
      socket.emit("join_room", data);
      socket.emit("user_joined", data);
      setShowChat(true);
    }
  };

  useEffect(() => {

    

    const fetchData = async () => {
      try {
        const email = JSON.parse(localStorage.getItem("user")).user_id;
        const response = await axios.get(`http://localhost:5000/patients/email/${email}`);
        const userData = response.data.data;
        setUsername(userData.first_name);
        if (userData.nhs_number === "False") {
          setRoom(userData.id)
          setIsStaff(false)
          joinRoom()
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchData();
    setIsLoading(false)

   
  }, [username]);
  
  return (
    <div className="livechat-page">
      <div className="livechat">
        {isLoading && <div>Loading...</div>}
        {!showChat && isStaff && !isLoading ? (
          <div className="joinChatContainer">
            <h3>Join A Chat</h3>
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    </div>
  );
  
}

export default ChatPage;
