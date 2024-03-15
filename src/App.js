import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Signup from "./Pages/User/Signup";
import Login from "./Pages/User/Login";
import Home from "./Pages/Home";
import Games from "./Pages/Game/Games";
import Teams from "./Pages/Team/Teams";
import Admin from "./Pages/Admin/Admin";
import Tournament from "./Pages/Tournament/Tournament";
import Contact from "./Pages/User/Contact";
import AboutUS from "./Pages/About/AboutUS";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Signup/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/Home'>
            <Home/>
          </Route>
          <Route path='/Games'>
            <Games/>
          </Route>
          <Route path='/Teams'>
            <Teams/>
          </Route>
          <Route path='/Tournaments'>
            <Tournament/>
          </Route>
          <Route path='/Contact'>
            <Contact/>
          </Route>
          <Route path='/Aboutus'>
            <AboutUS/>
          </Route>
          <Route path='/AdminLogin'>
            <Admin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
