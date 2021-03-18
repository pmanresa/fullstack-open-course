import React, { useState } from 'react'
import { round } from 'mathjs'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.isPercentage !== undefined ? "%" : ""}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = total / 3
  const positivePercentage = total > 0 ? (good / total) * 100 : 0

  return (
    <table>
      <tbody>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={total} />
        <Statistic text="Average" value={round(average, 2)} />
        <Statistic text="Positive" value={round(positivePercentage, 2)} isPercentage={true} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad

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
        {
          total === 0 ? "No feedback given" : <Statistics good={good} neutral={neutral} bad={bad}/>
        }
      </div>
    </>
  );
}

export default App;
