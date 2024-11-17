const express = require('express');
const router = express.Router();
const db = require('../config/database');

// List campaigns
router.get('/', async (req, res) => {
  const { audienceId } = req.query;
  let query = 'SELECT * FROM campaigns';
  let params = [];

  // If audienceId is provided, filter campaigns by audience_id
  if (audienceId) {
    query += ' WHERE audience_id = ?';
    params.push(audienceId);
  }

  query += ' ORDER BY created_date DESC'; // Order campaigns by created_date

  try {
    const [results] = await db.query(query, params);
    res.send({ campaigns: results });
  } catch (error) {
    res.status(500).send({ message: 'Error fetching campaigns', error });
  }
});

// Create a new campaign
router.post('/', async (req, res) => {
  const { name, audienceId, messageTemplate } = req.body;

  // Validate the input to ensure no undefined values are passed
  if (!name || !audienceId || !messageTemplate) {
    return res.status(400).send({
      message: "Invalid input. 'name', 'audienceId', and 'messageTemplate' are required.",
    });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO campaigns (name, audience_id, message_template) VALUES (?, ?, ?)',
      [name, audienceId, messageTemplate]
    );
    res.status(201).send({
      campaignId: result.insertId,
      message: 'Campaign created successfully',
    });
  } catch (error) {
    res.status(500).send({ message: 'Error creating campaign', error });
  }
});

module.exports = router;
