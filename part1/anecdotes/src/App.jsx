import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Winner = ({ anecdotes, votes }) => {

  let mostVoted = Object.keys(votes).filter((keys) => votes[keys] === Math.max(...Object.values(votes)))[0]
  console.log(Math.max(...Object.values(votes)))
  return (
    <div>
      {anecdotes[mostVoted]}
      <br />
      has {votes[mostVoted]} votes
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const anecdotesLength = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  const selectRandom = () => {
    let randomIndex = Math.floor(Math.random() * anecdotesLength)
    do {
      randomIndex = Math.floor(Math.random() * anecdotesLength)
    } while (selected == randomIndex)
    setSelected(randomIndex)
  }

  const voting = () => {
    const newVoted = { ...votes }
    if (newVoted[selected]) {
      newVoted[selected] += 1
    }
    else {
      newVoted[selected] = 1
    }
    setVotes(newVoted)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <Button text="next anecdote" onClick={selectRandom} />
      <Button text="vote" onClick={voting} />
      <h1>Anecdote with most votes</h1>
      <Winner anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App