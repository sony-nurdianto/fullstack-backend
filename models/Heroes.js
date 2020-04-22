const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heroesModel = new Schema({
  fullname: {
    type: String,
  },
  born: {
    type: String,
    required: true,
  },
  dead: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  establishment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("heroes", heroesModel);
