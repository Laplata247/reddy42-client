import React from 'react'

function RenderMessageContent({messageContent}) {
    
    if (messageContent.author === 'System') {
      return (
        <div className="system-message">
          <p>{messageContent.content}</p>
        </div>
      );
    } else {
      return (
        <div >
          
          <div className="message-content">
            <p>{messageContent.content}</p>
          </div>
          <div className="message-meta">
            <p id="time">{messageContent.time}</p>
            <p id="author">{messageContent.author}</p>
          </div>
        </div>
      );
    }
}

export default RenderMessageContent