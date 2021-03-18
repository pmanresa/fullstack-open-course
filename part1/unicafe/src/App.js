import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>
      {props.text} {props.value} {props.isPercentage !== undefined ? "%" : ""}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = total / 3
  const positivePercentage = total > 0 ? good / total : 0

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics text="Good" value={good} />
        <Statistics text="Neutral" value={neutral} />
        <Statistics text="Bad" value={bad} />
        <Statistics text="All" value={total} />
        <Statistics text="Average" value={average} />
        <Statistics text="Positive" value={positivePercentage} isPercentage={true} />
      </div>
    </>
  );
}

export default App;
