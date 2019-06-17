import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuadrantList from "./QuadrantList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuadrantList />
      </header>
    </div>
  );
}

export default App;
