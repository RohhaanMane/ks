import React from 'react'
import './riddleCard.css'

const RiddleCard = () => {
  return (
    <>

    <img className='cartoonImg' src='/assets/7_cat.avif'/>
    <div className='riddle-card'>
      <div className='headerName'>
        <span>◀️</span>
        <h4>हे घे सोडव..</h4>
      </div>
      <p>
      <span className='newSpan'>NO. :- </span>
      करी👓 के दिल मे हु, </p>
      <p>दिल के बाहर भी... </p>
      <p>है सब अपने ,</p>
      <p>लगे थोड़ा odd bhi... </p>
      <p>Developer हूं, </p>
      <p>Develop करूं दिल में प्यार भी...</p>
      <p>कहता हूं खुदको, </p>
      <p>Calm demeanor... </p>
      <p>Let's see, If </p>
      <p>You can find me sooner... </p>
    </div>
    <div className='caution'>caution: Kindly do not take it personally🙏 Secret Santa pe gussa nahi karte...🫠</div>
    </>
  )
}

export default RiddleCard