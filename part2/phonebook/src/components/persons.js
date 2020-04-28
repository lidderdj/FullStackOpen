import React from 'react'

const Persons = ({personsToShow}) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <div key={person.id}>
          <p>Name: {person.name} number: {person.number}</p>
        </div>
      ))}
    </div>
  )
}

export default Persons
