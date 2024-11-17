const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Simulated sendMessage function
async function sendMessage(recipientEmail, messageContent) {
    const isSent = Math.random() < 0.9; // 90% chance of SENT, 10% of FAILED
    return {
        email: recipientEmail,
        message: messageContent,
        status: isSent ? 'SENT' : 'FAILED'
    };
}

// Send Messages API
router.post('/send', async (req, res) => {
    const { campaignId } = req.body;

    // Validate campaignId
    if (!campaignId) {
        return res.status(400).send({ message: "Campaign ID is required." });
    }

    try {
        // Fetch audience details including customer_id
        const [audiences] = await db.query(
            'SELECT id, campaign_id, name, email, customer_id FROM audience WHERE campaign_id = ?',
            [campaignId]
        );

        // Check if audiences exist
        if (!audiences.length) {
            return res.status(404).send({ message: "No audience found for the given campaign ID." });
        }

        // Process each audience and send messages
        const results = await Promise.all(
            audiences.map(async (audience) => {
                // Validate audience data
                if (!audience.customer_id || !audience.email || !audience.name) {
                    throw new Error(`Invalid audience data: ${JSON.stringify(audience)}`);
                }

                const messageContent = `Hi ${audience.name}, here’s 10% off on your next order!`;

                // Simulate sending a message
                const messageResult = await sendMessage(audience.email, messageContent);

                // Insert into communications_log
                await db.execute(
                    'INSERT INTO communications_log (customer_id, email, message, status) VALUES (?, ?, ?, ?)',
                    [audience.customer_id, audience.email, messageContent, messageResult.status]
                );

                return messageResult;
            })
        );

        // Respond with the results of message sending
        res.status(200).send({ messages: results });
    } catch (error) {
        console.error("Failed to send messages:", error);
        res.status(500).send({ message: "Failed to send messages", error: error.message });
    }
});

module.exports = router;
