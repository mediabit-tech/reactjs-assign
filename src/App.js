import './App.css';
import React from 'react';
import Signup from './components/Signup';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/reactjs-assign">
            <Login />
          </Route>
          <Route exact path="/contactus">
            <Contactus />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;