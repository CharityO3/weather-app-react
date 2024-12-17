import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

// import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ready:false});
  function displayWeather(response){
    setWeatherData({
      ready: true,
      date: "Tuesday 12:10",
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url
    });
  }
  
  if (weatherData.ready){
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input className="search-input" type="search" placeholder="Enter a city.." required autoFocus="on" autocomplete="off"/>
            </div>
            <div className="col-3">
              <input className="btn btn-primary w-100" type="Submit" value="Search"/>
            </div>
          </div>
        </form>
  
        <h1 className="current-city">{weatherData.city}</h1>
        <ul className="current-weather-details">
          <li>{weatherData.date}</li> 
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img src={weatherData.iconUrl} alt={weatherData.description}/>
              <div>
                <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } 
  else{
    let apiKey = "b125a59f9afa4ebc141352te1ao60a9c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  return "Loading...."
}