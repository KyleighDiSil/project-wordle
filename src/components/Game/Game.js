import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  let status = undefined;
  const [guesses, setGuesses] = React.useState([]);
  const [bannerStatus, setBannerStatus] = React.useState({
    guessCount: 0,
    status,
  });
  const handleSubmit = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (answer === guess) {
      status = "happy banner";
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      status = "sad banner";
    }
    setBannerStatus({ guessCount: nextGuesses.length, status });
  };

  return (
    <>
      <GuessList list={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmit}
        isDisabled={!!bannerStatus.status}
      />
      {bannerStatus.status === "happy banner" && (
        <Banner
          className={bannerStatus.status}
          children={
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>
                {" "}
                {bannerStatus.guessCount === 1
                  ? "1 guess"
                  : `${bannerStatus.guessCount} guesses`}
              </strong>
              .
            </p>
          }
        />
      )}
      {bannerStatus.status === "sad banner" && (
        <Banner
          className={bannerStatus.status}
          children={
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          }
        />
      )}
    </>
  );
}

export default Game;
