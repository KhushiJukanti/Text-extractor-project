const express = require('express');
const router = express.Router();
const OrderModel = require('../models/Order');
const openai = require('openai');
// const langchain = require('langchain');



// Initialize OpenAI API client
const OPENAI_API_KEY = 'Orders';
const openaiClient = new openai.OpenAI(OPENAI_API_KEY);

// Initialize Langchain API client
const LANGCHAIN_API_KEY = 'orders';
const translator = new langchain.Translator(LANGCHAIN_API_KEY);

// Route to translate text
router.post('/translate', async (req, res) => {
    try {
        const { text, from, to } = req.body;
        const translation = await translator.translate({ from, to, text });
        res.json({ translation });
    } catch (error) {
        console.error('Translation Error:', error);
        res.status(500).json({ error: 'Translation failed' });
    }
});

// Route to interact with OpenAI
router.post('/openai', async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await openaiClient.completions.create({
            engine: 'davinci',
            prompt,
            max_tokens: 50,
            stop: '\n',
        });
        res.json({ response: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error('OpenAI Error:', error);
        res.status(500).json({ error: 'OpenAI request failed' });
    }
});



router.get('/all', async function (req, res) {
    let orders = await OrderModel.find({})
    res.send(orders)
})

router.get('/:orderId', async (req, res) => {
    try {
        const order = await OrderModel.findOne({ order_id: req.params.orderId });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/create', async function (req, res) {
    const neworderData = new OrderModel({ ...req.body })
    const createdTask = await neworderData.save();
    res.send(createdTask)
})

module.exports = router;
