const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
  district_name: {
    type: String,
    required: [true, "Please Enter Your District Name"],
  },
  state_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("District", districtSchema);
