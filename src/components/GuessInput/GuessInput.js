import React from 'react';


const GuessInput = () => {
  const [guess, setGuess] = React.useState("")

  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({guess})
    setGuess("")
  }

  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" required pattern='[A-Za-z]{5}' maxLength={5} title="5 letters" value={guess} onChange={handleChange}/>
</form>;
}

export default GuessInput;
