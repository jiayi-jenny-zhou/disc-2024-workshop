import React from 'react';
import Profile from './profile';
import { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';
import NavBar from './navBar';
import './App.css';

const Home = () => {
  const [trueDucksOnly, setTrueDucksOnly] = React.useState(false);
    const [users, setUsers] = React.useState([]);
  useEffect(() => {
    console.log( `trueDucksOnly changed: ${trueDucksOnly}`);
  }
  , [trueDucksOnly]);
  useEffect(() => {
    console.log('fetching users');
    fetch('http://localhost:3005/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      }); 
  }
  , []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <div>
        <h2>Meet the Ducks</h2>

      <ToggleButton
        value="check"
        selected={trueDucksOnly}
        onChange={() => setTrueDucksOnly((prevSelected) => !prevSelected)}
      >
        <CheckIcon /> Show True Ducks Only
      </ToggleButton>
        
      <div className="grid-container">
        {users.map((user) => {
        if (trueDucksOnly && user.true_duck === false) {
            return null;
        }
          console.log(user);
          return (
            
            <Profile name={user.name} email={user.email} bio={user.bio} id_value={user.id} key={user.id} />
            
          );
        })}
      </div>

      </div>
      <footer>
        <button className="back-to-top">Back to Top</button>
    </footer>
    </div>
  );
};

export default Home;
