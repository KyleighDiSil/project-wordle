import React from "react";

const GuessInput = ({ handleSubmitGuess, isDisabled }) => {
  // tentative guess
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    handleSubmitGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[A-Za-z]{5}"
        maxLength={5}
        title="5 letters"
        value={guess}
        disabled={isDisabled}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
};

export default GuessInput;
