const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result, _] = await db.execute(
      `INSERT INTO customers (name, email) VALUES (?, ?)`,
      [name, email]
    );
    res.status(201).send({ message: "Customer added", customerId: result.insertId });
  } catch (error) {
    res.status(500).send({ message: "Error adding customer", error });
  }
});

module.exports = router;
