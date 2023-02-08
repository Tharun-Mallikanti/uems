const mongoose = require("mongoose");
const formSchema = mongoose.Schema({
  username: String,
  password: String,
  type: String,
});
module.exports = mongoose.model("User", formSchema);
