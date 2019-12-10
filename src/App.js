import React from 'react';
import './App.css';

import Nav from './components/Nav';
import  Home  from "./pages/Home";
import  About  from "./pages/About";
import  Shop  from "./pages/Shop";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
