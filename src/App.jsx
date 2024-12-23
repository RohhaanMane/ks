import React, { useState } from "react";
import "./App.css"; // Make sure to style your button and main page appropriately
import RiddleCard from "./components/RiddleCard";

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const messages = [
    "Hi 🙋‍♂️",
    "Curious to Know me?😁",
    "Chal Ek koda solve kr",
    "Almost there!",
    "Hi",
    "",
    
  ];

  const images = [
    "src/assets/1_fox.jpg", // Replace with actual image paths
    "src/assets/2_fox.avif",
    "src/assets/5_fox.jpg",
    "src/assets/3_fox.avif",
    "src/assets/4_fox.jpg",
    "src/assets/7_cat.avif",
  ];

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="app-container">
      {clickCount < messages.length - 1 ? (
        <div className="button-container">
          {images[clickCount] && (
            <img
              src={images[clickCount]}
              alt="Cartoon"
              className="cartoon-image"
            />
          )}
          <h2>{messages[clickCount]}</h2>

          <button className="emoji-button" onClick={handleClick}>
            😊 Click Me!
          </button>
        </div>
      ) : (
        <div className="main-page">
          <h1>{messages[messages.length - 1]}</h1>
          {/* <p>Here's your main page content!</p> */}
          <RiddleCard />
        </div>
      )}
    </div>
  );
};

export default App;