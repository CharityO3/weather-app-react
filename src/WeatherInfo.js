import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";


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
                <WeatherIcon code={props.data.icon} size={52}/>
              </div>
              <div>
                <WeatherTemperature celsius={props.data.temperature}/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: <span className="atmosphere-condition">{props.data.humidity}%</span></li>
              <li>Wind: <span className="atmosphere-condition">{Math.round(props.data.wind)} km/h</span></li>
            </ul>
          </div>
        </div>
    </div>
  );
}