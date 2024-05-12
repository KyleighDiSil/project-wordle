import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { range } from "../../utils";

const GuessList = ({ list, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} submittedGuess={list[num]} correctAnswer={answer} />
      ))}
    </div>
  );
};

export default GuessList;
