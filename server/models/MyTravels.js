const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const myTravelsSchema = new Schema({
    origin: String,
    destiny: String,
    date: Date

})
const MyTravels = mongoose.model('MyTravels', myTravelsSchema);
module.exports = MyTravels;