import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){
  return(
    <div className="Weather-info">
      
      <h1 className="current-city">{props.data.city}</h1>
        <ul className="current-weather-details">
          <li>
            <FormattedDate date={props.data.date}/>
          </li> 
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <div>
                <WeatherIcon code={props.data.icon}/>
              </div>
              <div>
                <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>

    </div>
  );
}