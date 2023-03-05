import Home from './Home';
import React from 'react';
import Connect from './Connect';
import Profile from './Profile';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div id="navigation">
          <Link to="/"></Link>
          <Link to="/connect"></Link>
          <Link to="/profile"></Link>
        </div>
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/connect" element={<Connect />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>

        </div>
    </Router>
  );
}

export default App;
