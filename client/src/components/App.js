import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import QuadrantList from "./QuadrantList";
import DroneForm from "./DroneForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ul className="nav nav-tabs">
            <li className="nav-item "><Link to="/" className="nav-link"> Home </Link></li>
            <li className="nav-item"><Link to="/form" className="nav-link">Form</Link></li>
          </ul>
          <div className="container">
            <Switch>
              <Route exact path='/' component={QuadrantList}/>
              <Route path='/form' component={DroneForm}/>
            </Switch>
          </div>

        </Router>
      </header>
    </div>
  );
}

export default App;
