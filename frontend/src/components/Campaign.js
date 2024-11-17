import React, { useState } from 'react';
import axios from 'axios';

const Campaign = () => {
  const [name, setName] = useState('');
  const [audienceId, setAudienceId] = useState('');
  const [template, setTemplate] = useState('');

  // Create campaign
  const createCampaign = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/campaigns`, {
        name,
        audienceId,
        messageTemplate: template,
      });
      alert('Campaign created successfully');
    } catch (error) {
      console.error('Error creating campaign:', error);
    }
  };

  return (
    <div>
      <h1>Create Campaign</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Audience ID"
        value={audienceId}
        onChange={(e) => setAudienceId(e.target.value)}
      />
      <textarea
        placeholder="Message Template"
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
      />
      <button onClick={createCampaign}>Create Campaign</button>
    </div>
  );
};

export default Campaign;
