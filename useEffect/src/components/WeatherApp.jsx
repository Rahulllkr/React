import React, { useState } from 'react'

const Weather = () => {
    const [city,setCity] = useState("")
    const [weatherUpdate,setWeatherUpdate] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(
           (`http://api.weatherapi.com/v1/current.json?key=cd27fcb3530d4623a7b180733252307&q=${city}&aqi=no`) 
           )
           if(!response.ok){
            throw new Error(`HTTP Some Error ${!response.ok}`)
        }
           const data = await response.json();
           console.log(data)
           setWeatherUpdate(data);
        }catch(err){
            console.log("Error fetching weather data",err);
        }
    }
  return (
    <div>
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
            <label>City</label>
            <input type="text" onChange={(e) => setCity(e.target.value) }/>
            <button type='submit'>Get Weather</button>
        </form>
        <div>
            {weatherUpdate?(
                <div>
                      <p>Weather in {weatherUpdate.location.name}</p>
                      <p>Temprature:{weatherUpdate.current.temp_c}</p>
                      <p>Condition:{weatherUpdate.current.condition.text}</p>
                      <img src={weatherUpdate.current.condition.icon} alt="" />

                </div>):(
                    <p>No Data</p>
                )
        }
        </div>
    </div>
  )
}

export default Weather