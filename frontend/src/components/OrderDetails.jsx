// Example React component making requests to backend API endpoints

import React, { useState } from 'react';

function OrderDetails() {
    const [translatedText, setTranslatedText] = useState('');
    const [openAiResponse, setOpenAiResponse] = useState('');

    // Function to translate text
    const translateText = async () => {
        const response = await fetch('/api/orders/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: 'Hello, how are you?',
                from: 'en',
                to: 'fr',
            }),
        });
        const data = await response.json();
        setTranslatedText(data.translation);
    };

    // Function to interact with OpenAI
    const openAiRequest = async () => {
        const response = await fetch('/api/orders/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: 'Translate the text "Hello, how are you?" to French.',
            }),
        });
        const data = await response.json();
        setOpenAiResponse(data.response);
    };

    return (
        <div>
            <button onClick={translateText}>Translate Text</button>
            <p>Translated Text: {translatedText}</p>

            <button onClick={openAiRequest}>Interact with OpenAI</button>
            <p>OpenAI Response: {openAiResponse}</p>
        </div>
    );
}

export default OrderDetails;
