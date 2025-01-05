import React from 'react';

const NavBar = () => {
  return (
    <div class="navbar">
    <div class="site-name">The Pond</div>
    <ul class="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/saved-profiles">Saved Profiles</a></li>
        <li><a href="/create-profiles">Create Profiles</a></li>
    </ul>
</div>
  );
}
export default NavBar;
