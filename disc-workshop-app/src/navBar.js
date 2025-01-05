import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="navbar">
    <div className="site-name">The Pond</div>
    <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/saved-profiles">Saved Profiles</a></li>
        <li><a href="/create-profiles">Create Profiles</a></li>
    </ul>
</div>
  );
}
export default NavBar;
