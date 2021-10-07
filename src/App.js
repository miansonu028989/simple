import React from 'react';
import './App.css';
import "animate.css/animate.min.css";
import 'bootstrap';
import Headers from './components/Header/Header';
import Logins from './components/Logins/Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Course from './components/Course/Course';

function App() {
  return (
    <div className="App">
      <Router>
            <Headers/>
            <Switch>
              <Route exact path="/Login">
                <Logins/>
              </Route>
              <Route exact path="/Course">
                <Course/>
              </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
