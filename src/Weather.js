import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-info">
      <form className="header">
        <input
          className="search-input"
          type="search"
          placeholder="Enter a city.."
          required
          autofocus
          autocomplete="off"
        />
        <input className="submit-button" type="Submit" value="Search" />
      </form>
      <div className="current-weather">
        <div>
          <h1 className="current-city">Poznan</h1>
          <p className="current-weather-details">
            <span>Tuesday 12:10</span>, <span>scattered clouds</span> <br />
            Humidity: <strong>15%</strong>, Wind: <strong>8km/h</strong>
          </p>
        </div>
        <div className="current-temperature-info">
          <div className="current-temperature-icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
            />
          </div>
          <div className="current-temperature-value">14</div>
          <div className="current-temperature-unit">°C</div>
        </div>
      </div>
      <footer>
        <p className="code-credit">
          This project was coded by{" "}
          <a href="https://github.com/CharityO3" target="_blank">
            Charity Orhoridiohwo
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/CharityO3/My-Live-Weather-App"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://my-live-weather-app.netlify.app/" target="_blank">
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}