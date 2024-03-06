const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema(
  {
    shop: {
      type: String,
    },
    url: {
      type: String,
    },
    price: {
      type: String,
    },
    title: {
      type: String,
    },
    favorite: {
      type: Boolean,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = { ItemSchema };
