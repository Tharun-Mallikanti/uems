const mongoose = require("mongoose");
const formSchema = mongoose.Schema({
  name: String,
  nParticipants: String,
  desc: String,
  date: String,
  timeIn: String,
  timeOut: String,
  venue: String,
  approved: Boolean,
  refreshments: String,
});
module.exports = mongoose.model("Event", formSchema);
