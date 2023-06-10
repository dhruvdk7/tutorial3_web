import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const { userData } = location.state;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Profile</h3>
              <p className="card-text">First Name: {userData.firstName}</p>
              <p className="card-text">Last Name: {userData.lastName}</p>
              <p className="card-text">Email: {userData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
