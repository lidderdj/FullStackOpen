import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
	return (
		<div>
			<p>
			{props.text} {props.value}
			</p>
		</div>
	)
}

const Statistics = (props) => {
	const good = props.good
	const bad = props.bad
	const neutral = props.neutral
	const all = props.good+props.neutral+props.bad
	const average = ((props.good*1)+(props.bad*-1))/all
  	const positive = (props.good/all)*100
	
	if (all === 0) {
		return(
		<div>
			<p>
			No feedback given
			</p>
		</div>
		)
	}
	return (
		<div>
			<tr>
				<td><Statistic text="Good"/></td> 
				<td><Statistic value={good}/></td>
			</tr>
			<tr>
				<td><Statistic text="Neutral"/></td>
				<td><Statistic value={neutral}/></td>
			</tr>
			<tr>
				<td><Statistic text="Bad"/></td> 
				<td><Statistic value={bad}/></td>
			</tr>
			<tr>
				<td><Statistic text="All"/></td> 
				<td><Statistic value={all}/></td>
			</tr>
			<tr>
				<td><Statistic text="Average"/></td> 
				<td><Statistic value={average}/></td>
			</tr>
			<tr>
				<td><Statistic text="Positive"/></td> 
				<td><Statistic value={positive}/></td>
			</tr>
		</div>
	)
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
	
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)	
  
  const handleGoodClick = () => {
	  setGood(good +1)
  }
  
  const handleNeutralClick = () => {
	  setNeutral(neutral +1)
  }
	
  const handleBadClick = () => {
	  setBad(bad +1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
        <Button onClick={handleGoodClick} text='Good' />
	  	<Button onClick={handleNeutralClick} text='Neutral' />
	  	<Button onClick={handleBadClick} text='Bad' />
	  <h1>Statistics</h1>
		<div>
			<Statistics good={good} neutral={neutral} bad={bad}/>
		</div>
    </div>
  )
}

ReactDOM.render(<App />, 
document.getElementById('root')
)


/*import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
	
}

const Statistics = (props) => {
	const all = props.good+props.neutral+props.bad
	const average = ((props.good*1)+(props.bad*-1))/all
  	const positive = (props.good/all)*100
	
	if (all === 0) {
		return(
		<div>
			<p>
			No feedback given
			</p>
		</div>
		)
	}
	
	return (
		<div>
			<p>
				Good = {props.good} <br/>
				Neutral = {props.neutral} <br/>
				Bad = {props.bad} <br/>
				All={all} <br/>
				Average = {average} <br/>
				Positive = {positive}%
			</p>
		</div>
		)
}

const App = () => {
  // save clicks of each button to own state
	
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)	

  return (
    <div>
      <h1>Give Feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>  
        <button onClick={() => setBad(bad + 1)}>bad</button>  
	  <h1>Statistics</h1>
		<Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)*/