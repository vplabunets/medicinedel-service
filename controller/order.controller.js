const createError = require('http-errors');
const { Order } = require('../models/order');

async function placeOrder(req, res, next) {
  const { name, email, address, phone, orderList } = req.body;
  try {
    console.log(req.body);
    await Order.create({
      name,
      email,
      address,
      order,
      orderList,
    });
    res.status(201).json({
      name,
      email,
      address,
      phone,
      orderList,
    });
  } catch (err) {
    if (err.message.includes('E11000 duplicate key error')) {
      return next(createError(409, 'Atricle with this title already exists'));
    }
    throw err;
  }
}

async function getOrders(req, res, next) {
  const { limit = 0, page = 1 } = req.body;

  try {
    const skip = (page - 1) * limit;
    const orders = await Order.find({}).skip(skip).limit(limit);

    return res.status(200).json(orders);
  } catch (err) {
    console.error(err);
  }
}
async function getOrderById(req, res, next) {
  const { _id } = req.params;
  try {
    const order = await Order.findById(_id);
    if (!item) {
      return res.status(400).json({ message: 'Order not found' });
    }
    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
  }
}

async function updateOrder(req, res, next) {
  const { _id } = req.params;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(err);
  }
}

module.exports = {
  placeOrder,
  getOrders,
  getOrderById,
  updateOrder,
};
