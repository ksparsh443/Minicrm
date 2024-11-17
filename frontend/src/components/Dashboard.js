import React from 'react';

const Dashboard = () => {
  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/api/auth/google`; // Redirect to Google login
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1d2b64, #f8cdda)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontFamily: '"Poppins", sans-serif',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          padding: '30px 50px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
          maxWidth: '600px',
        }}
      >
        <h1
          style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            animation: 'fadeIn 2s',
          }}
        >
          Welcome to the CRM App
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            animation: 'fadeIn 3s',
          }}
        >
          By Sparsh Kandpal, 21BCE1961
        </p>

        <button
          onClick={handleLogin}
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '25px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            margin: '10px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
          onMouseDown={(e) => (e.target.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Login with Google
        </button>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;
