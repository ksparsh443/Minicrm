import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/order`);
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Add a new order
  const addOrder = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/order`, { customerId, amount });
      fetchOrders();
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  return (
    <div>
      <h1>Orders</h1>
      <input
        type="text"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addOrder}>Add Order</button>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Customer {order.customerId} - ${order.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
