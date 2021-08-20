import React from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Service from './components/pages/Service';
import Products from './components/pages/Products';
import SignUp from './components/pages/Sign-up';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Service" exact component={Service}/>
          <Route path="/Products" exact component={Products}/>
          <Route path="/Sign-Up" exact component={SignUp}/>
          <Route path="/Contact" exact component={Contact}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
