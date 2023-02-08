const mongoose = require("mongoose");
const CONNECTION_URL =
  "mongodb+srv://tharun:2003%40Tha@cluster0.t8bayka.mongodb.net/uems?retryWrites=true&w=majority";
const db = () => {
  mongoose.connect(CONNECTION_URL, () => {
    console.log("mongo/atlas connnected");
  });
};
module.exports = db;
