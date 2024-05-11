import React from "react";
import { range } from "../../utils";

function Guess({ submittedGuess }) {
  console.log(submittedGuess);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {submittedGuess ? submittedGuess[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
