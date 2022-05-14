import React, { useEffect, useState } from 'react'
import WeatherBox from './WeatherBox'


function WeatherStrip() {

    // expand to see/edit api search params
  const apiOptions = {
    lat: 39.7392,
    long: -104.9903,
    units: "imperial",
    key: process.env.REACT_APP_WEATHER_KEY
  }

  const [weatherData, setWeatherData] = useState([])


  useEffect(() => {
    function getWeatherData() {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${apiOptions.lat}&lon=${apiOptions.long}&exclude=current,minutely,hourly&units=${apiOptions.units}&appid=${apiOptions.key}`
  
      fetch(url)
          .then(res => res.json())
          .then(data => {
            // console.log(data.daily[0].dt);
              setWeatherData(data.daily.splice(0, 5))
          })
          .catch(console.error)
    }
      getWeatherData()
  }, [])


  return (
    <div className='container'>
      {
        weatherData.length <= 0 
          ? <p>Looking for data, weatherboy? It ain't here, dipshit.</p>
          : weatherData.map((data, i) => (
            <WeatherBox 
              data={data} 
              index={i} 
              key={i}
              />
          ))
      }
    </div>
  )
}

export default WeatherStrip