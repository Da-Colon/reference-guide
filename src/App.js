import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import Navigation from './containers/navigation';
import Main from './containers/main';
import './assets/styles/main.css'

const App = () => (
    <div className="app">
      <Router>
        <div className="app-container">
          <Navigation />
          <Main />
        </div>
      </Router>
    </div>
)

export default App;
