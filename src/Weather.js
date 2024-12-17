import "./Weather.css";
import axios from "axios";
// import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  function displayWeather(response){
    // alert(`The Weather in ${city}  is ${Math.round(response.data.temperature.current)}°C`)
  }
  let city = props.city;
  let apiKey = "b125a59f9afa4ebc141352te1ao60a9c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
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

      <h1 className="current-city">Poznan</h1>
      <ul className="current-weather-details">
        <li>Tuesday 12:10</li> 
        <li>scattered clouds</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/>
            <div>
              <span className="temperature">6</span><span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 15 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}