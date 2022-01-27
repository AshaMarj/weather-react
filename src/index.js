import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>
        San Miguel de Allende, <br />
        Guanajuato, Mexico
      </h1>

      <Search />

      <footer>
        <a href="https://github.com/AshaMarj/weather-react">open-source code</a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
