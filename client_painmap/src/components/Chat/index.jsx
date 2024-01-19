import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import RenderMessageContent from "../RenderMessageContent";
import './styles.css';

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [historyLoaded, setHistoryLoaded] = useState(false);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        content: currentMessage,
        time: `${new Date(Date.now()).getHours()}:${String(new Date(Date.now()).getMinutes()).padStart(2, '0')}`,
      };

      try {
        await socket.emit("send_message", messageData);
        setCurrentMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const fetchPreviousMessages = async () => {
    try {
      const response = await fetch(`http://localhost:5000/messages/${room}`);
      const data = await response.json();
      setMessageList(data.data);
      setHistoryLoaded(true); 
    } catch (error) {
      console.error("Error fetching previous messages:", error);
    }
  };

  useEffect(() => {
    if (!historyLoaded) {
      fetchPreviousMessages();
    }

    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });

    socket.on("user_joined", (data) => {
      setMessageList((list) => [...list, data]);
    });
  
    socket.on("user_left", (data) => {
      setMessageList((list) => [...list, data]);
    });

    return () => {
      socket.off("receive_message");
      socket.off("user_joined");
      socket.off("user_left");
    };
  }, [socket, room, historyLoaded]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => (
            <div
              key={index}  
              className="message"
              id={username === messageContent.author ? "you" : "other"}
            >
              <RenderMessageContent messageContent={messageContent} />
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyDown={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage} className="send-btn">&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
