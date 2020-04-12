import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
console.log(props)  
return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Header = (props) => {
    console.log(props)
	return (
	<div>
        <h1>{props.course}</h1>
	</div>
		)
}

const Content = (props) => {
    return (
    <div>
		<Part part={props.name1} exercises={props.exercises1}/>
       	<Part part={props.name2} exercises={props.exercises2}/>
        <Part part={props.name3} exercises={props.exercises3}/>
    </div>
    )
}

const Total = (props) => {
    return (
    <div>
        <p>Number of exercises {props.total} </p>
    </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content
	  	name1 = {course.parts[0].name}
	  	exercises1 = {course.parts[0].exercises}
	  	name2 = {course.parts[1].name}
	  	exercises2 = {course.parts[1].exercises}
	  	name3 = {course.parts[2].name}
	  	exercises3 = {course.parts[2].exercises}
	  />
      <Total total={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))






