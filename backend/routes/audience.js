const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.post('/', async (req, res) => {
  const { conditions } = req.body; // conditions should be an array of { field, operator, value, logic }
  let query = "SELECT COUNT(*) AS audienceSize FROM customers WHERE ";
  let queryParams = [];

  try {
    // Dynamically build the WHERE clause
    conditions.forEach((cond, index) => {
      // Append the condition to the query
      query += `${index > 0 ? ` ${cond.logic || 'AND'} ` : ''}${cond.field} ${cond.operator} ?`;
      queryParams.push(cond.value);
    });

    // Debugging: Log the generated query
    console.log('Generated Query:', query);

    // Execute the query
    const [results] = await db.execute(query, queryParams);
    const audienceSize = results[0].audienceSize;

    res.send({ audienceSize });
  } catch (error) {
    res.status(500).send({ message: "Error calculating audience size", error });
  }
});

module.exports = router;
