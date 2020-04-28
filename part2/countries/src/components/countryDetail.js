import React from "react"

const CountryDetail = ({countries}) => {
  return (
    <div>
        <h1>{countries.name}</h1>
        <p>Capital: {countries.capital}</p>
        <p>Population: {countries.population}</p>
        <h2>Languages</h2>
        <ul>
          {countries?.languages?.map(language =>
            <li key={language.name}>{language.name}</li>
          )}
        </ul>
        <h2>Flag</h2>
        <img
          src={countries.flag}
          style={{width:200, height:128}}
        />
    </div>
  )
}

export default CountryDetail
