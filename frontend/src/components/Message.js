import React, { useState } from 'react';
import axios from 'axios';

const Message = () => {
  const [campaignId, setCampaignId] = useState('');

  // Send messages
  const sendMessages = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/message/send`, {
        campaignId,
      });
      console.log('Messages sent:', response.data.messages);
    } catch (error) {
      console.error('Error sending messages:', error);
    }
  };

  return (
    <div>
      <h1>Send Messages</h1>
      <input
        type="text"
        placeholder="Campaign ID"
        value={campaignId}
        onChange={(e) => setCampaignId(e.target.value)}
      />
      <button onClick={sendMessages}>Send Messages</button>
    </div>
  );
};

export default Message;
