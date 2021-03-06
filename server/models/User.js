const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  image:String,
  password: String,

  originCountry: String,
  email: String,

  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order',
    require: true

  }],
  myTravels: [{
    type: Schema.Types.ObjectId,
    ref: 'MyTravels',
    require: true
  }],
  role: {
    type: String,
    enum: ["MULE", "CUSTOMER"],
    default: "CUSTOMER"
  }
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    reviews: String,
    stars: Number
  });

const User = mongoose.model('User', userSchema);
module.exports = User;