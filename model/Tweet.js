const mongoose = require("mongoose")

const tweetSchema = new mongoose.Schema({
  author: {type: String},
  tweet: {type: String} 
})

module.exports = mongoose.model('Tweet', tweetSchema)