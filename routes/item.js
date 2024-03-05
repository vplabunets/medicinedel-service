const express = require('express');
const { validateBody } = require('../middlewares/index');
const { tryCatchWrapper } = require('../helper/index');
const { createItem, getItems, getItemById, updateItem } = require('../controller/item.controller');
const { itemSchema } = require('../schemas/itemSchema');

const itemRouter = express.Router();

itemRouter.get('/', tryCatchWrapper(getItems));
itemRouter.get('/:_id', tryCatchWrapper(getItemById));

itemRouter.post('/', tryCatchWrapper(createItem), validateBody(itemSchema));
itemRouter.put('/:_id', tryCatchWrapper(updateItem));

module.exports = { itemRouter };
