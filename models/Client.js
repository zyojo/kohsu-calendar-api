const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  color: {
    type: String,
  },
  user_id: {
    type: String,
  },
});

module.exports = mongoose.model("Client", ClientSchema);
