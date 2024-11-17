import React, { useState } from 'react';
import axios from 'axios';

const Audience = () => {
  const [conditions] = useState([]);
  const [size, setSize] = useState(0);

  // Create audience
  const createAudience = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/audience`, {
        conditions,
      });
      setSize(response.data.size);
    } catch (error) {
      console.error('Error creating audience:', error);
    }
  };

  return (
    <div>
      <h1>Audience</h1>
      <button onClick={createAudience}>Create Audience</button>
      <p>Audience Size: {size}</p>
    </div>
  );
};

export default Audience;
