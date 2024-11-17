const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.post('/', async (req, res) => {
  const { customerId, amount } = req.body;

  // Validate input
  if (!customerId || !amount) {
    return res.status(400).send({ message: "customerId and amount are required." });
  }

  try {
    const [result, _] = await db.execute(
      `INSERT INTO orders (customer_id, amount) VALUES (?, ?)`,
      [customerId, amount]
    );
    res.status(201).send({ message: "Order added", orderId: result.insertId });
  } catch (error) {
    console.error("Error adding order:", error);
    res.status(500).send({ message: "Error adding order", error });
  }
});

module.exports = router;
