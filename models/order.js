const { mongoose } = require('mongoose');
const { OrderSchema } = require('../schemas/orderSchema');

const Order = mongoose.model('orders', OrderSchema);

module.exports = { Order };
