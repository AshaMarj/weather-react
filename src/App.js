import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          San Miguel de Allende, <br />
          Guanajuato, Mexico
        </h1>

        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="clear"
          id="icon"
        />

        <h3> 73°C </h3>

        <h4>Partly Cloudy</h4>

        <h5>Wind Speed 55</h5>

        <div className="Search">
          <form>
            <input type="Search" placeholder="Type a city" />
            <input type="button" value="Search" />
          </form>
        </div>
      </header>
      <br />
      <footer>
        <a href="https://github.com/AshaMarj/my-weather-app">
          open-source code
        </a>
      </footer>
    </div>
  );
}

export default App;
