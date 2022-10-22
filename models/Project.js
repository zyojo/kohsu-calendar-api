const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  workload: {
    type: Number,
  },
  is_hourly: {
    type: Boolean,
    default: false,
  },
  wage: {
    type: Number,
  },
  workdays: {
    type: [{ date: Date, work_hours: Number }],
  },
  client_id: {
    type: String,
  },
  user_id: {
    type: String,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
