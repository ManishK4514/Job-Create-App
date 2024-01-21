const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  minSalary: {
    type: String,
    required: true
  },
  maxSalary: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Job', jobSchema);