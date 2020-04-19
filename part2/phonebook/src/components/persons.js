import React from 'react'

const Persons = ({persons}) => {
  return (
    <div>
      {persons.map(person => (
        <div key={person.id}>
          <p>Name: {person.name} number: {person.number}</p>
        </div>
      ))}
    </div>
  )
}

export default Persons
