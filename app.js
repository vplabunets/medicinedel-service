const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { itemRouter } = require('./routes/item.js');
const { orderRouter } = require('./routes/order.js');

const app = express();

//Middlewares
app.use(cors());
app.use(express.json()); // express works with json in body
app.use(morgan('dev'));

//Routes
app.use('/api/items', itemRouter);
app.use('/api/orders', orderRouter);

//404 error handling
app.use((req, res) => {
  console.log(req);
  console.log(res.error);
  res.status(404).json({
    message: 'Not Found 2',
  });
});
//Error handling
app.use((err, req, res, next) => {
  //handle mongoose validation error
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message });
  }

  if (err.message.includes('cast to ObjectId failed for value')) {
    return res.status(400).json({ message: 'id is invalid' });
  }

  if (err.status) {
    return res.status(err.status).json({
      message: err.message,
    });
  }
  console.log(err);
  return res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = { app };
