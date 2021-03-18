import React, { useState } from 'react'
import { getRandomInt, initializePoints } from './util'

const Anecdote = ({selected, votes, anecdotes}) => {
  return (
    <>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const initialVotes = initializePoints(anecdotes.length)
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)
  const [mostVotes, setMostVotes] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)

  const handeVoteClick = (selected) => {
    const newVotes = {...votes}
    newVotes[selected] += 1
    setVotes(newVotes)

    if (newVotes[selected] > mostVotes) {
      setMostVotes(newVotes[selected])

      if (selected !== mostVoted) {
        setMostVoted(selected)
      }
    }
  }

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote selected={selected} votes={votes} anecdotes={anecdotes}/>
        <div>
          <button onClick={() => handeVoteClick(selected)}>Vote</button>
          <button onClick={() => setSelected(getRandomInt(0, anecdotes.length - 1))}>Next anecdote</button>
        </div>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <Anecdote selected={mostVoted} votes={votes} anecdotes={anecdotes}/>
      </div>
    </>
  )
}

export default App;