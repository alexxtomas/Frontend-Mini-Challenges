import { useMemo, useRef, useState } from 'react'
export default function GuessTheNumber() {
  const [restartGame, setRestartGame] = useState(false)
  const randomNumber = useMemo(() => Number.parseInt(Math.random() * 101), [restartGame])
  const [guesses, setGuesses] = useState([])
  const [guessNumber, setGuessNumber] = useState(randomNumber)
  const [feedbackMsg, setFeedbackMsg] = useState('')
  const inputRef = useRef(null)

  const handleStartGame = () => {
    setRestartGame(false)
    setGuesses([])
    setFeedbackMsg('')
    setGuessNumber(randomNumber)
    inputRef.current.value = ''
  }

  const handleSubmitClick = (evt) => {
    const { valueAsNumber } = inputRef.current
    if (Number.isNaN(valueAsNumber) || valueAsNumber < 0 || valueAsNumber > 100) {
      setFeedbackMsg('Invalid value!')
      return
    }
    const userNumber = inputRef.current.valueAsNumber
    if (guesses.length === 9) {
      setFeedbackMsg(`You lost! The number was ${guessNumber}`)
      setRestartGame(true)
      return
    }
    setGuesses((curr) => [...curr, userNumber])
    if (guessNumber === userNumber) {
      setFeedbackMsg('You got it! Congrats')
      setRestartGame(true)
      return
    }
    if (guessNumber > userNumber) setFeedbackMsg('Too low!')
    if (guessNumber < userNumber) setFeedbackMsg('Too high!')

    inputRef.current.value = ''
  }
  return (
    <div className='bg-zinc-900 min-h-screen'>
      <header className='flex justify-center items-center h-20 border-b-2 border-gray-400'>
        <h1 className='text-3xl font-bold text-gray-200  '>Guess the number</h1>
      </header>
      <main className='flex flex-col justify-center items-center text-gray-200 gap-5'>
        <label htmlFor='guess' className='mt-5 text-xl'>
          Enter a guess between 0 to 100
        </label>
        <input
          className='text-black font-medium rounded w-24 text-center'
          id='guess'
          type='number'
          required
          min='0'
          max='100'
          placeholder='52'
          ref={inputRef}
        />
        {restartGame ? (
          <button
            className='rounded py-2 px-3 bg-green-400 border-none text-slate-800 hover:scale-100 '
            onClick={handleStartGame}
          >
            Start Game
          </button>
        ) : (
          <button
            className='rounded py-2 px-3 bg-green-400 border-none text-slate-800 hover:scale-100 '
            onClick={handleSubmitClick}
          >
            Submit
          </button>
        )}

        <p>{feedbackMsg}</p>
        <p>
          Your guesses:{' '}
          {guesses.map((guess, index) => (
            <span className="after:content-[','] last-of-type:after:content-['']" key={index}>
              {' '}
              {guess}
            </span>
          ))}
        </p>
      </main>
    </div>
  )
}
