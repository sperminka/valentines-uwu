import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure? ಠ_ಠ",
  "Reallyyyy sure? (¬⤙¬ )",
  "Pleaseee (｡•́︿•̀｡)",
  "( • ᴖ • ｡)",
  "Gonna cry ๐·°(⋟﹏⋞)°·๐",
  "You break my heart (◞‸◟；)",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = Math.min(noCount * 20 + 16, 500); // Limit growth to prevent layout breaking

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="kitty"
            src="https://media.tenor.com/AFiLaRTAxvYAAAAi/cute-hello-kitty.gif"
          />
          <div className="text">Yay!!!! ₍ᐢ. .ᐢ₎ ₊˚⊹♡</div>
        </>
      ) : (
        <>
          <img
            alt="minion"
            className="minion-img"
            src="https://i.imgur.com/biSVMdV.jpeg"
            style={{ width: "300px", height: "300px" }}
          />
          <div className="question">
            Will you be my Valentine? (◍•ᴗ•◍)♡ ✧*。
          </div>
          <div className="button-container">
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
