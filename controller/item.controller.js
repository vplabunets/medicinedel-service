const createError = require('http-errors');
const { Item } = require('../models/item');

async function createItem(req, res, next) {
  const { shop, url, price, title, favorite } = req.body;
  try {
    console.log(req.body);
    await Item.create({
      shop,
      url,
      price,
      title,
      favorite,
    });
    res.status(201).json({
      shop,
      url,
      price,
      title,
      favorite,
    });
  } catch (err) {
    if (err.message.includes('E11000 duplicate key error')) {
      return next(createError(409, 'Atricle with this title already exists'));
    }
    throw err;
  }
}

async function getItems(req, res, next) {
  const { limit = 0, page = 1 } = req.body;

  try {
    const skip = (page - 1) * limit;
    const items = await Item.find({}).skip(skip).limit(limit);

    return res.status(200).json(items);
  } catch (err) {
    console.error(err);
  }
}
async function getItemById(req, res, next) {
  const { _id } = req.params;
  try {
    const item = await Item.findById(_id);
    if (!item) {
      return res.status(400).json({ message: 'Item not found' });
    }
    return res.status(200).json(item);
  } catch (error) {
    console.error(error);
  }
}

async function updateItem(req, res, next) {
  const { _id } = req.params;

  try {
    const updatedItem = await Item.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedItem);
  } catch (error) {
    console.error(err);
  }
}

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItem,
};
