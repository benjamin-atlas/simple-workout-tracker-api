require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json({ limit: process.env.REQUEST_LIMIT }));

const programsRouter = require('./routes/programs');
const templatesRouter = require('./routes/templates');
const videoLinksRouter = require('./routes/video-links');

app.use('/programs', programsRouter);
app.use('/templates', templatesRouter);
app.use('/video-links', videoLinksRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});