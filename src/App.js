import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './containers/MainComponent/MainComponent';
import './App.css';

function App() {

  

  return (
    <div>
      <Router>
        <div>
          <Main />
        </div>
      </Router>
    </div>
  );
}

export default App;
