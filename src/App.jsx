import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './componenets/Home';
import er from './componenets/er';
import re from './componenets/re';
import ir from './componenets/ir';
import Navbar from './componenets/CustomNavbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/er" component={er} />
        <Route path="/re" component={re} />
        <Route path="/ir" component={ir} />
     
      </div>
    </Router>
  );
}

export default App;
