import React, { useState, useEffect } from 'react'
import Persons from './components/persons'
import Filter from './components/filter'
import Add from './components/add'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('Add a new name')
  const [ newNumber, setNewNumber ] = useState('Add a new number')
  const [ showAll, setShowAll ] = useState(true)
  const [ search, setSearch ] = useState("")

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length +1,
      matchesSearch: true
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
      <Filter search = {search} handleSearch = {handleSearch}/>
      <Add addName = {addName} handleNewNameChange = {handleNewNameChange} newNumber = {newNumber} handleNewNumberChange = {handleNewNumberChange}/>
      <h2>Numbers</h2>
        <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App
