import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
function Counter(route) {
   
    const totalPoints = route.totalPoints;
    const [strength, setStrength] = useState(0);
 
    const [speed, setSpeed] = useState(0);
    const handleAttributeChange = (event, attributeName) => {
         const value = parseInt(event.target.value, 10);
      if (attributeName === "strength") { 
                setStrength(event.target.value);
              if (value + speed > totalPoints) {
                 setSpeed(totalPoints - value);
               }
  
   
      } else if (attributeName === "speed") {
                setSpeed(event.target.value);
              if (strength + value > totalPoints) {
                setStrength(totalPoints - value);
              }
      }
   
    };
    return (
    <div className="grid-container">
        <div className="grid-item">
            <div className="header">
                <b>Counter component - Use State</b>
                <br/><br/><br/>
            </div>
            <div>
                Character stats: <span id="points">{totalPoints - strength - speed}</span>  points
            <div>
                <input type="range" id="strength" min="0" max={totalPoints} value={strength} step="1" onChange={(event) => handleAttributeChange(event, "strength")}/>
                Strength {strength}
                </div>
                <div>
                <input type="range" id="speed" min="0" max={totalPoints} value={speed} step="1" onChange={(event) => handleAttributeChange(event, "speed")} />
                Speed {speed}
                </div>
            </div> 
        </div>    
        
    </div>
    ); 
  
}
export default Counter;