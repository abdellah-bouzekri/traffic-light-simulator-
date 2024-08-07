import React, { useEffect } from "react";
import { useState } from "react";
function TraficLight() {
  const [Light, setLight] = useState("red");

  useEffect(() => {
    let timeout;
    const cycleLights = () => {
      if (Light === "red") {
        timeout = setTimeout(() => setLight("green"), 5000); // 5 seconds for red
      } else if (Light === "green") {
        timeout = setTimeout(() => setLight("yellow"), 5000); // 5 seconds for green
      } else if (Light === "yellow") {
        timeout = setTimeout(() => setLight("red"), 2000); // 2seconds for yellow
      }
    };

    cycleLights(); // Initial call to start the cycle

    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  }, [Light]);
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "5px" }}>
        traffic light simulator 🚦
      </h1>
      <div>
        <div className="traffic-light">
          <div className={`light red ${Light === "red" ? "active" : ""}`}></div>
          <div
            className={`light yellow ${
              Light === "yellow" ? "active" : ""
            }`}></div>
          <div
            className={`light green ${
              Light === "green" ? "active" : ""
            }`}></div>
        </div>
      </div>
    </div>
  );
}

export default TraficLight;
