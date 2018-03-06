const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    
    price: String,
    shop_name: String,
    currency: String,
    orderDate: Date
    
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;