import logo from './logo.svg';
import './App.css';
import Profile from './profile';
import NavBar from './navBar';
import React, { use } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';


function App() {
  const [trueDucksOnly, setTrueDucksOnly] = React.useState(false);
  useEffect(() => {
    console.log( `trueDucksOnly changed: ${trueDucksOnly}`);
  }
  , [trueDucksOnly]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div>
        <h2>Meet the Ducks</h2>

      <ToggleButton
        value="check"
        trueDucksOnly={trueDucksOnly}
        onChange={() => setTrueDucksOnly((prevSelected) => !prevSelected)}
      >
        <CheckIcon /> Show True Ducks Only
      </ToggleButton>
        
      <div class="grid-container">
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
      </div>
    <footer>
        <button class="back-to-top" onclick="scrollToTop()">Back to Top</button>
    </footer>
    </div>
  );
}

export default App;
