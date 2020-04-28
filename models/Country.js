const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");
// const saltRounds = 12;


const CountrySchema = new Schema({
  name: {
    type: String,
    required : true
  },
  secreat: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  
});

// CountrySchema.pre("save", function (next) {
//     this.password = bcrypt.hashSync(this.password, saltRounds)
//     next()
//   });

module.exports = mongoose.model("country", CountrySchema);
