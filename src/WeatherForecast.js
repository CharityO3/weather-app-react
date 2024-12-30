import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayWeatherForecast(response){
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded){
    return(
      <div className="WeatherForecast">
       <WeatherForecastDay data={forecast[1]}/>
      </div>
    )
  }else{
    let city = props.city;
    let apiKey = "b125a59f9afa4ebc141352te1ao60a9c";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeatherForecast);
  }
}