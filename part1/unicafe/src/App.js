import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Info = (props) => {
  return (
    <div>
      {props.text} {props.value} {props.isPercentage !== undefined ? "%" : ""}
    </div>
  )
}

const StatisticsInfo = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  const average = total / 3
  const positivePercentage = total > 0 ? (good / total) * 100 : 0

  return (
    <>
      <Info text="Good" value={good} />
      <Info text="Neutral" value={neutral} />
      <Info text="Bad" value={bad} />
      <Info text="All" value={total} />
      <Info text="Average" value={average} />
      <Info text="Positive" value={positivePercentage} isPercentage={true} />
    </>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props
  const total = good + neutral + bad
  
  return (
    <div>
      <h1>Statistics</h1>
      {
        total === 0 ? "No feedback given" : <StatisticsInfo good={good} neutral={neutral} bad={bad}/>
      }
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  );
}

export default App;
