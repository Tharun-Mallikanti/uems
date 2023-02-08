const express = require("express");
const login = require("../models/user.js");
const router = express.Router();
router.post("/login", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    let user = login.find({ username: data.username });
    if (user) {
      if (data.password == user.password) {
        res.json({ success: true, type: user.type });
      }
    } else {
      res.json({ success: false });
    }
  } catch {
    res.json({ message: "Internal Server error" });
  }
});
module.exports = router;
