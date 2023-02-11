const express = require("express");
const User = require("../models/user.js");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "27090907";
router.post("/login", async (req, res) => {
  try {
    let token;
    const data = req.body;
    console.log(data);
    const u = data.username;
    let getUser = await User.findOne({ username: u });
    console.log(getUser);
    if (getUser) {
      if (data.password == getUser.password) {
        token = jwt.sign({ _id: getUser._id }, JWT_SECRET);
        res.json({ success: true, type: getUser.type, token: token });
      }
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
