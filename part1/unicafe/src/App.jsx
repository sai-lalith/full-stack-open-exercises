import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  if (props.percentage === true) {
    return (
      <>
        <tr>
          <td>{props.text}</td>
          <td>{props.stat} %</td>
        </tr>
      </>
    )
  }
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.stat}</td>
      </tr>
    </>
  )
}

const Statistics = ({ good, neutral, bad, all }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (<>
      <h1>statistics</h1>
      No feedback give
    </>
    )
  }
  return (<>
    <h1>statistics</h1>
    <table>
      <tbody>
      <StatisticsLine text="good" stat={good}></StatisticsLine>
      <StatisticsLine text="neutral" stat={neutral}></StatisticsLine>
      <StatisticsLine text="bad" stat={bad}></StatisticsLine>
      <StatisticsLine text="all" stat={all}></StatisticsLine>
      <StatisticsLine text="average" stat={all / 3}></StatisticsLine>
      <StatisticsLine text="positive" stat={good / all} percentage={true}></StatisticsLine>
      </tbody>
    </table>
  </>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }
  const updateNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }
  const updateBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }
  let all = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={updateGood} />
      <Button text="neutral" onClick={updateNeutral} />
      <Button text="bad" onClick={updateBad} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}></Statistics>
    </div>
  )
}

export default App