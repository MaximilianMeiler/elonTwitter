require('dotenv').config();
const path = require('path')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const connectDB = require('./config/dbConn');
//connectDB();

const PORT = process.env.PORT || 3600;

app.use('/', express.static(path.join(__dirname, '/views')));

//all roads lead to index.html
app.all('*', (req, res) => {
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', 'index.html'));
  } else if (req.accepts('json')) {
      res.json({ "page": "twitter_home" });
  } else {
      res.type('txt').send("twitter_home");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));