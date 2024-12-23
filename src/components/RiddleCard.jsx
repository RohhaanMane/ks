import React from 'react'
import './riddleCard.css'

const RiddleCard = () => {
  return (
    <>

    <img className='cartoonImg' src='/assets/7_cat.avif'/>
    <div className='riddle-card'>
      <div className='headerName'>
        <span>◀️▶️</span>
        <h4>He Ghe sodav</h4>
      </div>
      <p>
      <span className='newSpan'>NO. :- </span>
        Rec ke Dil me hoon, </p>
      <p>Dil ke bahar bhi... </p>
      <p>Hai sb apne, </p>
      <p>Lagu thoda odd bhi... </p>
      <p>Developer hoon, </p>
      <p>Develop kru dil me pyaar bhi...</p>
      <p>Kehta hoon khudko, </p>
      <p>Calm demeanor... </p>
      <p>Let's see, If </p>
      <p>You can find me sooner... </p>
    </div>
    </>
  )
}

export default RiddleCard