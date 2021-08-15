import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const data = ["Rahul", "Aniket", "Robert", "Poem", "Kumar"];

  const [number, setNumber] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };
  const reset = () => {
    setNumber(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setNumber(number + 1);
      }, 1000);
    } else if (!isActive && number !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, number]);

  return (
    <div className="App">
      <h1> Hello </h1>
      <div>{data[number]}</div>
      <div>
        <button
          className={`button button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
