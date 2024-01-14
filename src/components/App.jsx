import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [bgColor, setBgColor] = useState("white");

  function submit() {
    setHeading("Submitted");
  }

  function changeBg() {
    setBgColor("black");
  }

  function normalBg() {
    setBgColor("white");
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={submit}
        onMouseOver={changeBg}
        onMouseOut={normalBg}
        style={{ backgroundColor: bgColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
