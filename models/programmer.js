const mongoose = require("mongoose");

const programmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  wikipediaInfo: {
    type: Object,
  },
});

const Programmer = mongoose.model("Programmer", programmerSchema);

module.exports = Programmer;
