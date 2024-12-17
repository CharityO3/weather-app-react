import Weather from './Weather.js';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Poznan"/>
      </div> 
    <footer>
    <p className="code-credit">
      This project was coded by{" "}
      <a href="https://github.com/CharityO3" target="_blank" rel="noreferrer">
        Charity Orhoridiohwo
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/CharityO3/My-Live-Weather-App"
        target="_blank" rel="noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a href="https://my-live-weather-app.netlify.app/" target="_blank" rel="noreferrer">
        Netlify
      </a>
    </p>
    </footer>
    </div>

  );
}

