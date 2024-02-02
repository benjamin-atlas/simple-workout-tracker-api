const express = require("express");
const router = express.Router();
const VideoLink = require("../models/video-link");

router.get("/", async (_req, res) => {
  try {
    const videoLinks = await VideoLink.find();
    res.json(videoLinks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
