import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Ensure Navbar component exists
import Dashboard from './components/Dashboard'; // Dashboard component (handles stats)
import Audience from './components/audience'; // Audience management
import Customers from './components/Customer'; // Customer management
import Campaigns from './components/Campaign'; // Campaign management
import Messages from './components/Message'; // Message management
import Auth from './components/Auth'; // Authentication

const App = () => {
  return (
    <Router>
      {/* Navbar component will persist across all routes */}
      <Navbar />
      <Routes>
        {/* Define the application routes */}
        <Route path="/" element={<Dashboard />} /> {/* Dashboard includes stats */}
        <Route path="/audience" element={<Audience />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/auth" element={<Auth />} />
        {/* Add a fallback route for undefined paths */}
        <Route path="*" element={<h1 style={{ textAlign: 'center' }}>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
