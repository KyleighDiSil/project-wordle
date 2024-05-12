import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ submittedGuess, correctAnswer }) {
  const guessStatus = checkGuess(submittedGuess, correctAnswer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span key={num} className={`cell ${guessStatus?.[num].status ?? ""}`}>
            {guessStatus?.[num].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
