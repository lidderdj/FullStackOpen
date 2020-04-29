import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryDetail from './components/countryDetail'
import Filter from './components/filter'

const App = () => {
  const [ countries, setCountries] = useState([])
  const [ search, setSearch ] = useState("")

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/name/' + search)
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [search])
  console.log({countries})

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(countries.length)
    }

  const handleShow = (country) => {
    setCountries([country])
  }

  if (countries.length === 1) {
    return (
      <div>
        <Filter search = {search} handleSearch = {handleSearch}/>
        <CountryDetail singleCountry={countries[0]}/>
      </div>
    )
    }
    return (
      <div>
        <Filter search = {search} handleSearch = {handleSearch}/>
        <h2>Countries</h2>
          <div>
            {countries.map((country) => (
              <div key={country.alpha3Code}>
                <p>{country.name} <button onClick={() => handleShow(country)}> Show </button></p>
              </div>
            ))}
          </div>
      </div>
  )
}

export default App
