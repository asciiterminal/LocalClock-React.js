import React, { useState } from "react";
import bg from "./video/bg.mp4";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
        <video
    autoPlay loop muted
    style={{
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1"

    }}
    >
     <source src={bg} type="video/mp4"/>
    </video>
      <h1>{time}</h1>
      <button onClick={updateTime}>Update Time</button>
    </div>
  );
}

export default App;
