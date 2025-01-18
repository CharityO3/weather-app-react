import Weather from './Weather.js';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Poznan"/>
      </div> 
    </div>

  );
}

