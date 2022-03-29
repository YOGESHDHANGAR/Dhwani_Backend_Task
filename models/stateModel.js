const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  state_name: {
    type: String,
    required: [true, "Please Enter Your District Name"],
  },
});

module.exports = mongoose.model("State", districtSchema);
