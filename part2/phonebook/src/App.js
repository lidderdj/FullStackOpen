import React, { useState } from 'react'
import Persons from './components/persons'

const App = () => {


  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('Add a new name')
  const [ newNumber, setNewNumber ] = useState('Add a new number')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length +1
    }
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`);
    } else {
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    console.log([persons])
  }
}

  const handleNewNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (

    <div>
      <h2>Phonebook</h2>
      <h2>Add a new number</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input
                  value={newName}
                  onChange={handleNewNameChange}
                  />
        </div>
        <div>
          Number: <input
                  value={newNumber}
                  onChange={handleNewNumberChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <Persons persons={persons}/>
    </div>
  )
}

export default App
