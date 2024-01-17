import { useState, useEffect } from "react";
import "./Clock.css";

export default function Clock({ city }) {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en", { timeZone: `Europe/${city}` })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en", {
        timeZone: `Europe/${city}`,
      });
      setTime(currentTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [city]);
  return (
    <div>
      <h2>{city} </h2>
      <div>{time}</div>
    </div>
  );
}
