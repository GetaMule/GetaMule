const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    originCountry: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    destinationCountry: String,
    item: {
        price: String,
        shop_name: String,
        currency: String,
        orderDate: Date
    },
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        },
    }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;