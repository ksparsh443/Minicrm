const express = require('express');
const router = express.Router();
const db = require('../config/database'); // Correct path to database.js

// Stats Route
router.get('/', async (req, res) => {
  try {
    // Fetch statistics from the database
    const [customers] = await db.query('SELECT COUNT(*) AS count FROM customers');
    const [campaigns] = await db.query('SELECT COUNT(*) AS count FROM campaigns');
    const [messages] = await db.query('SELECT COUNT(*) AS count FROM communications_log');

    // Send the statistics as response
    res.send({
      customers: customers[0].count,
      campaigns: campaigns[0].count,
      messages: messages[0].count,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).send({ error: 'Failed to fetch statistics' });
  }
});

module.exports = router;
