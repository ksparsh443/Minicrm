import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Auth = () => {
  const [user, setUser] = useState(null);

  // Fetch authenticated user details
  const fetchUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth/user`, {
        withCredentials: true, // Ensure cookies are sent for session tracking
      });
      setUser(response.data.user); // Set the user data from the backend
    } catch (error) {
      console.error('User not authenticated:', error);
      setUser(null); // Clear user data if not authenticated
    }
  };

  // Fetch user details on component mount
  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogin = () => {
    // Redirect to the backend Google login route
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/api/auth/google`;
  };

  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth/logout`, {
        withCredentials: true,
      });
      setUser(null); // Clear user data on logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {user ? (
        <>
          <h1>Welcome, {user.displayName}!</h1>
          {user.photos[0]?.value && (
            <img
              src={user.photos[0]?.value}
              alt="User Profile"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                margin: '20px 0',
              }}
            />
          )}
          <p>Email: {user.emails[0]?.value}</p>
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              backgroundColor: 'red',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Login to Continue</h1>
          <button
            onClick={handleLogin}
            style={{
              padding: '10px 20px',
              backgroundColor: 'blue',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Login with Google
          </button>
        </>
      )}
    </div>
  );
};

export default Auth;
