import React, { use } from 'react';
import Profile from './profile';
import NavBar from './navBar';
import './App.css';
import { useEffect } from 'react';




const SavedProfiles = () => {
    const [savedProfiles, setSavedProfiles] = React.useState([]);
    useEffect(() => {
        console.log('fetching saved profiles');
        fetch('http://localhost:3005/saved')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSavedProfiles(data);
            });
    }
    , []);
    return (
        <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <div>
            <h2>Saved Profiles</h2>
            <div className="grid-container">
                {savedProfiles.map((profile) => {
                    console.log(profile);
                    return (
                        <Profile name={profile.name} email={profile.email} bio={profile.bio} id={profile.id} key={profile.id} />
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

export default SavedProfiles;
