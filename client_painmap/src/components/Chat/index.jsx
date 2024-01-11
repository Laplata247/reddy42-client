import React, {useEffect, useState} from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'


function Chat({socket, username, room}) {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState([])

    const sendMessage = async() => {
        if (currentMessage != "") {
            const messageData = {
                room: room,
                author: username,
                content: currentMessage,
                time: 
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
            }
            await socket.emit('send_message', messageData)
        }
    }

    useEffect(() => {
        socket.on('recieve_message', (data)=>{
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

  return (
    <div className='chatWindow'>
        <div className='chat-header'>
            <p>Live Chat</p>
        </div>
        <div className='chat-body'>
            <ScrollToBottom className='message-container'>
            {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
            </ScrollToBottom>
        </div>
        <div className='chat-footer'>
            <input type="text" placeholder='message your GP...' 
            onChange={(e)=>{setCurrentMessage(e.target.value)}} 
            onKeyDown={(e) => {e.key === "Enter" && sendMessage();}}
            />
            <button onClick={sendMessage}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chat



// import React, { useEffect, useState } from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';

// function Chat({ socket, username, room }) {
//   const [currentMessage, setCurrentMessage] = useState('');
//   const [messageList, setMessageList] = useState([]);

//   // Simulate sending a hardcoded message
//   const sendMessage = async () => {
//     if (currentMessage !== '') {
//       const messageData = {
//         room: room,
//         author: username,
//         content: currentMessage,
//         time:
//           new Date(Date.now()).getHours() +
//           ':' +
//           new Date(Date.now()).getMinutes(),
//       };
//       console.log('Sending message:', messageData); // Log the simulated message
//       setMessageList([...messageList, messageData]); // Simulate adding the message to the list
//       setCurrentMessage(''); // Clear the input field after sending
//     }
//   };

//   useEffect(() => {
//     // Simulate receiving a hardcoded message
//     const receivedMessage = {
//       room: room,
//       author: 'someone_else', // Simulate another user sending a message
//       content: 'Hello, there!', // Simulate the message content
//       time:
//         new Date(Date.now()).getHours() +
//         ':' +
//         new Date(Date.now()).getMinutes(),
//     };
//     console.log('Received message:', receivedMessage); // Log the simulated received message
//     setMessageList([...messageList, receivedMessage]); // Simulate adding the received message to the list
//   }, []); // Simulate receiving a message once when component mounts

//   return (
//     <div className='chat-window'>
//       <div className='chat-header'>
//         <p>Live Chat</p>
//       </div>
//       <div className='chat-body'>
//         <ScrollToBottom className='message-container'>
//           {messageList.map((messageContent, index) => (
//             <div
//               key={index} // Use a unique key for each message
//               className='message'
//               id={username === messageContent.author ? 'you' : 'other'}
//             >
//               <div>
//                 <div className='message-content'>
//                   <p>{messageContent.content}</p> {/* Display message content */}
//                 </div>
//                 <div className='message-meta'>
//                   <p id='time'>{messageContent.time}</p>
//                   <p id='author'>{messageContent.author}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </ScrollToBottom>
//       </div>
//       <div className='chat-footer'>
//         <input
//           type='text'
//           placeholder='message your GP...'
//           value={currentMessage} // Use state value for input value
//           onChange={(e) => setCurrentMessage(e.target.value)}
//           onKeyDown={(e) => {
//             e.key === 'Enter' && sendMessage();
//           }}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// }

// export default Chat;
