import React from 'react'

const Persons = ({personsToShow, deleteName}) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <div key={person.id}>
          <p>Name: {person.name} 
            Number: {person.number} 
            <button 
              onClick={() => deleteName (person)}>
              Delete
              </button>
            </p>
        </div>
      ))}
    </div>
  )
}

export default Persons
