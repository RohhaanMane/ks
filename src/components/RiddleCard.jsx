import React from 'react'
import './riddleCard.css'

const RiddleCard = () => {
  return (
    <>

    <img className='cartoonImg' src='/assets/7_cat.avif'/>
    <div className='riddle-card'>
      <div className='headerName'>
        <h4>हे घे सोडव..</h4>
      </div>
      <p>
      तालाब में हूँ,,
      </p>
      <p>तालाब के बाहर भी,...</p>
      <p>सब मछलियाँ अपनी हैं, ,</p>
      <p>पर लगूं थोड़ा-थोड़ा Nemo भी।...</p>
      <p>Nemo की तरह clumsy नहीं हूँ,,</p>
      <p>पर हूँ थोड़ा calm।...</p>
      <p>When people talk to me,</p>
      <p>They feel warm।...</p>
      <p>क्या मुझे ढूंढ पाओगे, </p>
      <p>before the storm?...</p>
    </div>
    <div className='caution'>caution: Kindly do not take it personally🙏 Secret Santa pe gussa nahi karte...🫠</div>
    <br />
    <br />
    <br />
    <br />
    <hr />
    <div className='caution'>Hey! there is another gift for you, on the same page tommorow at 10 pm,be patient! 😊</div>
    </>
  )
}

export default RiddleCard