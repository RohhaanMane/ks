import React from 'react'
import './riddleCard.css'

const RiddleCard = () => {
  return (
    <>
    <img className='ssImg' src="assets/chatimg.png" alt="" />
    <div className='riddle-card'>
      <div className='headerName'>
        <h4>This is my chatting application that I have built</h4>
      </div>
      
      <a href="https://chit-chat-comet.onrender.com/"> https://chit-chat-comet.onrender.com/</a>
    <div className='caution'>Go and register...You'll see the secret Santa</div>
    <div className='caution'>Open website in browser mode if you are using mobile...</div>
    </div>
   
    </>
  )
}

export default RiddleCard