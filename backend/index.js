const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
require("dotenv").config();
db(); // CONNECTION TO DB
app.use(cors());
app.use(express.json());
app.use("/api/admin", require("./routes/adminForm.js"));
app.use("/api/organiser", require("./routes/approvals.js"));
app.use("/api", require("./routes/login.js"));
app.listen(5000, () => {
  console.log("Server running at 5000");
});
