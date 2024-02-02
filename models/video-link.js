const mongoose = require('mongoose');

const videoLinkSchema = new mongoose.Schema({
  aliases: [String],
  links: [String]
});

// Note, if you do not explicitly set the collection name, mongoose will use the model name and make it plural.
module.exports = mongoose.model('Video-Link', videoLinkSchema);