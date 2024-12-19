import Weather from './Weather.js';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Poznan"/>
      </div> 
    <footer>
    <p className="code-credit">
      This project was coded by{" "}
      <a href="https://github.com/CharityO3" target="_blank" rel="noreferrer">
        Charity Orhoridiohwo
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/CharityO3/weather-app-react"
        target="_blank" rel="noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a href="https://my-weatherapplication-react.netlify.app/" target="_blank" rel="noreferrer">
        Netlify
      </a>
    </p>
    </footer>
    </div>

  );
}

