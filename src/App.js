import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Loader from './components/Loader';

function App() {
  return (
    <>
      <Router>
        <Loader />
        <Navbar />
        <Switch>
          <Route path="/indigo/" exact  component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
