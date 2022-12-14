require('dotenv').config();
const path = require('path')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
let json = require("./data/tweets.json")
const Tweet = require("./model/Tweet")

const connectDB = require('./config/dbConn');
const { response } = require('express');
connectDB();

const Document = path.join(__dirname, 'views', 'index.html')

const PORT = process.env.PORT || 3600;

app.use('/', express.static(path.join(__dirname, '/views')));
app.use('/', express.static(path.join(__dirname, '/images')));

app.use(express.json());

app.get("/api/tweets", (req, response) => {
  console.log("a");
  const allTweets = Tweet.find({});
  allTweets
  .then((res) => JSON.stringify(res))
  .then((res) => {
    response.send(res);
  });
})

app.post("/api/tweets", (req, res) => {
  console.log("Button clicked")
  const {author, tweet} = req.body
  const t = Tweet.create({
    "author": author,
    "tweet": tweet,
  })
  
  console.log(t);
  window.location.reload()
})


//all roads lead to index.html
app.all('*', (req, res) => {
  if (req.accepts('html')) {
      res.sendFile(Document);
      console.log("Page loaded!")
  } else if (req.accepts('json')) {
      res.json({ "page": "twitter_home" });
  } else {
      res.type('txt').send("twitter_home");
  }
});


mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});