const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    originCountry: String,
    destinationCountry: String,
    item: {
        quantity: Number, name: String,
        mass: Number,
        price: Number
    }
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;