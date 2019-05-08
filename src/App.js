import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import BeerList from './containers/BeerList/BeerList';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={BeerList}/>
      </Router>
    </div>
  );
}

export default App;
