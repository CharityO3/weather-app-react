import React from "react";
import axios from "axios";
// import { Puff } from "react-loader-spinner";


export default function Weather(props){

  function displayWeather(response){
     alert(`The Weather in ${city}  is ${Math.round(response.data.temperature.current)}°C`)
  }
  let city = props.city;
  let apiKey = "b125a59f9afa4ebc141352te1ao60a9c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  return(
    <p>Hello</p>
  )

  /*return(
    <Puff
      color="blue"
      height={100}
      width={100}
      timeout={3000}     
    />
  );*/
}