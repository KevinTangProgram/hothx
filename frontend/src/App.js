import Home from './Home';
import React from 'react';
import Connect from './Connect';
import Profile from './Profile';
import Login from './Login';

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
          <Link to="/login"></Link>
        </div>
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/connect" element={<Connect />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>

        </div>
    </Router>
  );
}

export default App;
