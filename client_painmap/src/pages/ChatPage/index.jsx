import React from 'react'
import io from 'socket.io-client'
import Chat from '../../components/Chat'
import { useState, useEffect } from 'react';

import './style.css'

const socket = io.connect("");

function ChatPage() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  useEffect(()=>{
    console.log(username)
  },[username])

  const joinRoom = ()=> {
    socket.emit('join room', room)
  }

  return (
    <div className='chat'>
      <div className='joinChatContainer'>
        <h3>Join a chat</h3>
        <input type="text" placeholder='john' onChange={(e)=>{setUsername(e.target.value)}} />
        <input type="text" placeholder='room id' onChange={(e)=>{setRoom(e.target.value)}} />
        <button onClick={joinRoom}>Join room</button>
        <Chat socket={socket} username={username} room={room}/>
      </div>
    </div>
  )
}

export default ChatPage