import React, { useState } from "react";

function Birthday() {
    const [ageJane, setAgeJane] = useState(45);
    const [ageJohn, setAgeJohn] = useState(88);
    return (
      <div>
        <div>
          <h1>Doe, Jane</h1>
          <h3>Age : {ageJane}</h3>
          <h3>Hair Color : Black </h3>
          <button onClick={() => setAgeJane(ageJane + 1)}>
            Birthday Button for Jane Doe
          </button>
        </div>
        <div>
          <h1>Smith, John</h1>
          <h3>Age : {ageJohn}</h3>
          <h3>Hair Color : Brown </h3>
          <button onClick={() => setAgeJohn(ageJohn + 1)}>
            Birthday Button for John Smith
          </button>
        </div>
      </div>
    );
}

export default Birthday
