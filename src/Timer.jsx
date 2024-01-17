import { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer() {
  const [time, setTime] = useState(600);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className="timer">
      <h2>Timer</h2>
      <div>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
      <button className="button" onClick={handleStartStop}>
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
}
