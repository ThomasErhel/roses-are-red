import { useState, useEffect } from "react";
import "./App.css";

const colors = ["red", "orange", "yellow", "green", "purple", "blue"];

const ColorfulRoses = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [colorIndex]);

  return (
      <div className="App-header">
        Roses are {colors[colorIndex]}, Violets are {colors[colors.length - 1 - colorIndex]} 🌹💙
      </div>
  );
};

export default ColorfulRoses;