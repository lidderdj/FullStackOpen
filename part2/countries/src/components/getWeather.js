import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GetWeather = ({city}) => {
  const [weather, setWeather] = useState([])
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
          city +
          '&appid=' +
          api_key +
          '&units=metric'
      )
      .then((response) => {
        setWeather(response.data)
      })
  }, [city])

  const icon =
    weather && weather.weather
      ? 'http://openweathermap.org/img/wn/' +
        weather.weather[0].icon +
        '@2x.png'
      : ''

  if (weather && weather.weather) {
    return (
      <div>
        <h2>Weather</h2>
        <div>Current temperature: {weather.main.temp} Celsius</div>
        <div>Current wind: {weather.wind.speed} meter/sec</div>
        <img src={icon} alt={weather.weather[0].main} />
      </div>
    )
  }
  return <div>No data available</div>
}

export default GetWeather
