import React, { useEffect, useState } from 'react'


function WeatherStrip() {

    // expand to see/edit api search params
  const apiOptions = {
    lat: 39.7392,
    long: -104.9903,
    units: "imperial",
    key: process.env.REACT_APP_WEATHER_KEY
  }

  const [weatherData, setWeatherData] = useState([])

  function getWeatherData() {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${apiOptions.lat}&lon=${apiOptions.long}&exclude=current,minutely,hourly&units=${apiOptions.units}&appid=${apiOptions.key}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            setWeatherData(data)
            console.log("lol", data.daily[0].temp)
        })
        .catch(console.error)

  }

  useEffect(() => {
      getWeatherData()
  }, [])

  return (
    <div className='container'>
      {/* {
          weatherData 
            ? weatherData.daily.map((day, i) => (
                <p>day {i}: {day}</p>
            ))
            : <p>No data found</p>
      } */}
    </div>
  )
}

export default WeatherStrip