import "./App.css";
import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
             <h1>
          San Miguel de Allende, <br />
          Guanajuato, Mexico
        </h1>
       <Search />
     
      <br />
      <footer>
        <a href="https://github.com/AshaMarj/weather-react">open-source code</a>
      </footer>
    </div>
  );
}

export default App;
