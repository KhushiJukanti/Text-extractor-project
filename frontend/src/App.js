import React, { useState } from 'react';
import ChatWindow from './components/chatWindow'
import './App.css';

function App() {
  const [orderDetails, setOrderDetails] = useState(null);

  const handleOrderFetch = async (orderId) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`);
      if (!response.ok) {
        throw new Error('Order not found');
      }
      const data = await response.json();
      setOrderDetails(data);
    } catch (error) {
      console.error('Error fetching order:', error.message);
    }
  };

  return (
    <div className="App">
      <h1>Order Status Chatbot</h1>
      <ChatWindow handleOrderFetch={handleOrderFetch} />
      {orderDetails && (
        <div className="order-details">
          <h2>Order Details</h2>
          <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
