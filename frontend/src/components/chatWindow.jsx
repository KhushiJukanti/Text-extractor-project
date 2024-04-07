import React, { useState } from 'react';

function ChatWindow({ handleOrderFetch }) {
    const [orderId, setOrderId] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessageSend = async () => {
        setMessages([...messages, { sender: 'user', text: orderId }]);
        await handleOrderFetch(orderId);
        setOrderId('');
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className={message.sender}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="input">
                <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Enter order ID"
                />
                <button onClick={handleMessageSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatWindow;
