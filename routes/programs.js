const express = require("express");
const router = express.Router();
const Program = require("../models/program");

router.get("/", async (_req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await Program.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Program not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
