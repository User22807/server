const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
});

// Export the app as a serverless function for Vercel
module.exports = app;
module.exports.handler = require('serverless-http')(app);