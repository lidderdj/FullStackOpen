import React from 'react'

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({course}) => {
  const total = course.parts.reduce(
    (prev, curr) => prev + curr.exercises,
    0
  )
  return (
      <p>Total exercises: {total}</p>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default Course
