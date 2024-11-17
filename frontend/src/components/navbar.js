import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 mb-6">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-blue-400">Dashboard</Link>
        </li>
        <li>
          <Link to="/audience" className="text-white hover:text-blue-400">Audience</Link>
        </li>
        <li>
          <Link to="/customers" className="text-white hover:text-blue-400">Customers</Link>
        </li>
        <li>
          <Link to="/campaigns" className="text-white hover:text-blue-400">Campaigns</Link>
        </li>
        <li>
          <Link to="/messages" className="text-white hover:text-blue-400">Messages</Link>
        </li>
        <li>
          <Link to="/auth" className="text-white hover:text-blue-400">Auth</Link>
        </li>
      </ul>
    </nav>
  );
};

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to the Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-lg">
            <h2 className="text-white text-xl font-bold">Total Customers</h2>
            <p className="text-white text-3xl">125</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 p-4 rounded-lg shadow-lg">
            <h2 className="text-white text-xl font-bold">Active Campaigns</h2>
            <p className="text-white text-3xl">8</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-lg shadow-lg">
            <h2 className="text-white text-xl font-bold">Messages Sent</h2>
            <p className="text-white text-3xl">435</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Dashboard;
