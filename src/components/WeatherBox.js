import React from 'react'
import "./WeatherBox.css"

function WeatherBox({data, index}) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const getDayNum = () => new Date(data.dt * 1000).getDay()
  const dayOfWeek = days[getDayNum()]

  let imgURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


  return (
    <div className='weatherCardContainer'>
      <div className='weatherCard'>
          <h2>{dayOfWeek}</h2>
          <img src={imgURL} alt="weather icon" />
          <div className='tempContainer'>
            <span className='temp dailyMax'>{Math.round(data.temp.max)}°</span><span className='temp dailyMin'>{Math.round(data.temp.min)}°</span>
          </div>
      </div>
    </div>
  )
}

export default WeatherBox