const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  mass: Number,
  price: Number,
  job_id: String,
  author: {
    type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
  }
  
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
  }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;