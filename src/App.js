import React from 'react';
import './App.css';
import "animate.css/animate.min.css";
import 'bootstrap';
import Headers from './components/Header/Header';
import Logins from './components/Logins/Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Course from './components/Course/Course';
import Footer from './components/Footers/Footers';
import Footers from './components/Footers/Footers';

function App() {
  return (
    <div className="App">
      <Router>
            <Headers Course="Course"/>
            <Switch>
              <Route exact path="/Login">
                <Logins/>
                <Footers/>
              </Route>
              <Route exact path="/Course">
                <Course Course="Course"/>
                <Footers/>
              </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
