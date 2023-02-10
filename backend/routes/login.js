const express = require("express");
const User = require("../models/user.js");
const router = express.Router();
router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const u = data.username;
    let getUser = await User.findOne({ username: u });
    console.log(getUser);
    if (getUser) {
      if (data.password == getUser.password) {
        res.json({ success: true, type: getUser.type });
      }
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
