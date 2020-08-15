import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Route path="/" exact component={Dashboard}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
      </div>
    </Router>
  );
}

export default App;
