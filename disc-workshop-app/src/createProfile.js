import React from 'react';
import NavBar from './navBar';
import './App.css';

const CreateProfile = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [trueDuck, setTrueDuck] = React.useState(false);
    return (
        <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <div className="duck-form">
            <h2>Create a Profile</h2>
            <div>
            <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />  
            <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
            <input type="text" placeholder="Bio" onChange={(event) => setBio(event.target.value)} />
            <input
                type="checkbox"
                checked={trueDuck}
                onChange={() => setTrueDuck((prevSelected) => !prevSelected)}
            /> Are you a duck?
            </div>

            {/* the save button calls an api on localhost 3005, post to user with name, email, bio */}
            <button className="save-button" onClick={() => { 
                console.log('saving profile');
                console.log(trueDuck)
                fetch('http://localhost:3005/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: name, email: email, bio: bio, true_duck: trueDuck})
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });
            }
            }>Save</button>
      <footer>
        <button className="back-to-top">Back to Top</button>
    </footer>
    </div>
    </div>
    );

};

export default CreateProfile;
