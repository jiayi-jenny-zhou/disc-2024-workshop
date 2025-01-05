import React from 'react';

const Profile = ({name, email, bio, id_value}) => {
  return (
    <div className="grid-item">
              <div className="profile-image">
                  <img src="https://th.bing.com/th/id/OIP.Y2wL4wkXkMJMB59J3PFVcwAAAA?rs=1&pid=ImgDetMain" alt="profile" width="100" 
  height="100" />
              </div>
              <div className="profile-details">
                  <p className="profile-name">{name}</p>
                  <p className="profile-notes">{bio}</p>
                  <p className="profile-contact">Contact: {email}</p>
                  <button className="save-button" onClick = {() => {
                      fetch('http://localhost:3005/save', {
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({name: name, email: email, bio: bio, user_id: id_value})
                      })
                      .then((response) => response.json())
                      .then((data) => {
                          console.log(data);
                      });
                  }
                  }>Save</button>
              </div>
          </div>
  );
}
export default Profile;
