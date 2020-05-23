import React, { useState, useEffect } from 'react'
import Persons from './components/persons'
import Filter from './components/filter'
import Add from './components/add'
import Notification from './components/Notification'
import nameService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Add a new name')
  const [newNumber, setNewNumber] = useState('Add a new number')
  const [showAll, setShowAll] = useState(true)
  const [search, setSearch] = useState("")
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    nameService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length +1,
      matchesSearch: true
    }
    if (persons.find((person) => person.name === newName)) {
      if(window.confirm(`${newName} is already in the phonebook. Would you like to update the number for ${newName}?`)) {
        const person = persons.find((person) => person.name === newName)  
        nameService
          .update(person.id, nameObject)
          .then(response => {
            const newPersonsArray = persons.map((person) => person.name !== newName ? person : (response.data))
            setPersons(newPersonsArray)
          })
        }
          
    } else {
      nameService
           .create(nameObject)
           .then(response => {
             setPersons(persons.concat(response.data))
             setNewName('')
             setNewNumber('')
             setErrorMessage(
               `${newName} successfully added`
               )
               setTimeout(() => {
                 setErrorMessage (null)
               }, 2000)
           })
      }
  }

  const deleteName = ({id}) => {
      if(window.confirm("For real?")) {
        nameService
           .deletePerson(id)
           const newPersons = persons.filter((person) => person.id !== id)
           setPersons(newPersons)}
  }

  const handleNewNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setShowAll(false);
    }

  return (

    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter search = {search} handleSearch = {handleSearch}/>
      <Add addName = {addName} handleNewNameChange = {handleNewNameChange} newNumber = {newNumber} handleNewNumberChange = {handleNewNumberChange}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deleteName={deleteName}/>
    </div>
  )
}

export default App
