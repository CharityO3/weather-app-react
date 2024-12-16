import Weather from './Weather.js';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Poznan"/>
        <button classsName ="btn btn-primary">Hello</button>
      </div> 
    </div>
  );
}

