const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    name: String,
    base_unit: String,
    volume: Number,
    last: Number,
    Sell: Number,
    Buy: Number
});

const Currency = mongoose.model('Currency', currencySchema);
module.exports = Currency;