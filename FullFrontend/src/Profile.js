import React from 'react';
import './Profile.css';
import { Instagram, Facebook, LinkedIn, Twitter } from '@mui/icons-material';

const Profile = () => {
  // Replace the following with the actual user profile data
  const userProfile = {
    name: 'Deepakkannan M',
    email: 'deepak@gmail.com',
    age: 20,
    address: 'SKCET hostel,Coimbatore',
    phone: '6374831387',
    occupation: 'Student',
    education: 'B.tech-IT',
    hobbies: ['Reading', 'Gardening', 'Cooking','Cricket'],
    profilePhotoUrl: 'https://static.vecteezy.com/system/resources/previews/010/056/184/original/people-icon-sign-symbol-design-free-png.png', // Replace with the URL of the actual profile photo
    // Add more profile data as needed
  };

  return (
    <div className="profile-container">
      <h2 className='profile'>Profile Page</h2>
      <img src={userProfile.profilePhotoUrl} alt="Profile" className="profile-photo" />
      <div className="profile-details">
        <p>
          <span className="label">Name:</span> <span className="user-name">{userProfile.name}</span>
        </p>
        <p>
          <span className="label">Email:</span> {userProfile.email}
        </p>
        <p>
          <span className="label">Age:</span> {userProfile.age}
        </p>
        <p>
          <span className="label">Address:</span> {userProfile.address}
        </p>
        <p>
          <span className="label">Phone:</span> {userProfile.phone}
        </p>
        <p>
          <span className="label">Occupation:</span> {userProfile.occupation}
        </p>
        <p>
          <span className="label">Education:</span> {userProfile.education}
        </p>
        {/* Add more profile information as needed */}
      </div>
      <div className="social-media-icons">
        <Instagram fontSize="large" className="icon" />
        <Facebook fontSize="large" className="icon" />
        <LinkedIn fontSize="large" className="icon" />
        <Twitter fontSize="large" className="icon" />
      </div>
    </div>
  );
};

export default Profile;
