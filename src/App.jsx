import { useState, useEffect } from "react";
import "./App.css";
import Clock from "./Clock.jsx";
import Timer from "./Timer.jsx";
import Timer2 from "./Timer2.jsx";

function App() {
  return (
    <div className="App">
      <div className="part1">
        <div className="London">
          {" "}
          <Clock city="London" />
        </div>
        <div className="Paris">
          {" "}
          <Clock city="Paris" />
        </div>
      </div>
      <div className="part2">
        <div className="Timer">
          <Timer />
          <div className="Timer2">
            {" "}
            <Timer2 />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
