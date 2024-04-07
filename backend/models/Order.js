const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_id: Number,
    customer_name: String,
    order_date: Date,
    order_time: String,
    order_items: String,
    order_status: String,
    estimated_delivery: Date,
    payment_type: String,
    coins_used: Boolean,
});

module.exports = mongoose.model('Order', orderSchema);
