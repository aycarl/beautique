import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './../src/pages/homepage/homepage.component';


const Hats = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/hats' component={ Hats } />
      </Switch>
    </div>
  );
}

export default App;
