import React, { useState } from "react";
import "./styles.css";

const styles = {
  fontSize: "2rem",
  padding: "0.2rem 0.5rem",
  cursor: "pointer",
  backgroundColor: "blue"
};
const emojiDictionary = {
  "😃": "smiling",
  "🐻": "animal",
  "⚽": "playing",
  "💡": "light",
  "🎌": "flag"
};

export default function App() {
  var emojisWeKnow = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary(userInput);

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    console.log(emoji);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>EmojiPedia</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis we Know Are</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={styles}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
