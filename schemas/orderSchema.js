const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      match: [/[a-z0-9]+@[a-z0-9]+/, 'user email is not valid'],
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    orderList: [
      {
        medicineId: String,
        quantity: Number,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

module.exports = { OrderSchema };
