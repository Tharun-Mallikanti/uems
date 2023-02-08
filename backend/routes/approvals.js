const express = require("express");
const Aform = require("../models/Aform.js");
const router = express.Router();
router.post("/approvals", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    let d = await Aform.updateOne({ _id: data.id }, { approved: data.st });
    res.json({ data: d, success: true });
  } catch (error) {
    console.log("Error");
    res.json({ error, success: false });
  }
});
module.exports = router;
