import { useState, useEffect } from "react";
import "./Timer2.css";

export default function Timer() {
  const [time, setTime] = useState(240);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(240);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="timer2">
      <h2>Timer2</h2>
      <div>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
      <div>
        <button className="button" onClick={handleStartStop}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
