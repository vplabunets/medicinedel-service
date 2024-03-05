const express = require('express');
const { validateBody } = require('../middlewares/index');
const { tryCatchWrapper } = require('../helper/index');
const { placeOrder, getOrders, getOrderById, updateOrder } = require('../controller/order.controller');
const { orderSchema } = require('../schemas/orderSchema');

const orderRouter = express.Router();

orderRouter.get('/', tryCatchWrapper(getOrders));
orderRouter.get('/:_id', tryCatchWrapper(getOrderById));

orderRouter.post('/', tryCatchWrapper(placeOrder), validateBody(orderSchema));
orderRouter.put('/:_id', tryCatchWrapper(updateOrder));

module.exports = { orderRouter };
