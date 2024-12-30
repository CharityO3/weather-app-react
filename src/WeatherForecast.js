import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);

  }, [props.city]);

  function displayWeatherForecast(response){
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load(){
    let city = props.city;
    let apiKey = "b125a59f9afa4ebc141352te1ao60a9c";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeatherForecast);
  }

  if (loaded){
    return(
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index){
            if (index > 0 && index < 6){
              return(  
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast}/>
                </div>
              );
            } else{
              return null;
            }
          })}
        </div>   
      </div>
    )
  }else{
    load();

    return null;
  }
}