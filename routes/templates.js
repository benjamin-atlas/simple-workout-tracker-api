const express = require("express");
const router = express.Router();
const Template = require("../models/template");

router.get("/", async (_req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
