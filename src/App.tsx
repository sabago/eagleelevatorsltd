import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, useHistory } from 'react-router-dom';

import Routes from './routes';
import { Navigation } from './components/navigation/index';
import { Home } from './components/home';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Router>
          <Navigation />
          <Routes />        
        </Router> 
    </React.StrictMode>
    </div>
  );
}

export default App;
