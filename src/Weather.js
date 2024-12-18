import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

// import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity); //const is same as let
  function displayWeather(response){
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      city: response.data.city
    });
  }

  function search(){
    let apiKey = "b125a59f9afa4ebc141352te1ao60a9c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);

  }

  
  if (weatherData.ready){
    return (
      <div className="Weather">
        <form onSubmit = {handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input className="p-2 w-100" type="search" placeholder="Enter a city.." required autoFocus="on" autoComplete="off" onChange ={handleCityChange}/>
            </div>
            <div className="col-3">
              <input className="btn btn-primary w-100 h-100" type="Submit" value="Search"/>
            </div>
          </div>
        </form>
        <WeatherInfo data = {weatherData}/>
      </div>
    );
  } 
  else{
    search();
    return "Loading...."
  }
}