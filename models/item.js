const { mongoose } = require("mongoose");
const { ItemSchema } = require("../schemas/itemSchema");

const Item = mongoose.model("items", ItemSchema);

module.exports = { Item };
