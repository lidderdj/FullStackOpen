import React from "react"
import GetWeather from './getWeather'

const CountryDetail = ({singleCountry}) => {
  return (
    <div>
        <h1>{singleCountry.name}</h1>
        <p>Capital: {singleCountry.capital}</p>
        <p>Population: {singleCountry.population}</p>
        <h2>Languages</h2>
        <ul>
          {singleCountry?.languages?.map(language =>
            <li key={language.name}>{language.name}</li>
          )}
        </ul>
        <h2>Flag</h2>
        <img
          src={singleCountry.flag}
          style={{width:200, height:128}}
        />
        <GetWeather city={singleCountry.capital}/>
    </div>
  )
}

export default CountryDetail
