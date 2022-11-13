//const { sanitizeFilter } = require("mongoose")

//get for page load
let tweetBox = document.getElementById("tweets")

fetch("/api/tweets")
.then(response => response.json())
.then(response => loadTweets(response))

function loadTweets(json) {
  tweetBox.innerHTML = ""

  for (let x = json.length-1; x >=0; x--) {

    let author = document.createElement("p")
    let tweet = document.createElement("p")
    let text = document.createElement("div")
    let post = document.createElement("div")
    let img = document.createElement("img")

    author.classList.add("tweet-author")
    tweet.classList.add("tweet-contents")
    post.classList.add("posting")
    img.src = "./musk.jpeg"
    img.classList.add("elon-pic")

    author.innerHTML = json[x].author
    tweet.innerHTML = json[x].tweet
    text.appendChild(author)
    text.appendChild(tweet)
    post.appendChild(img)
    post.appendChild(text)
    tweetBox.appendChild(post)
  }
}



//post for tweet creation
const submit = document.getElementById("tweetButton")
console.log(submit)

submit.addEventListener("click", function() {
  let json = {author: "Elon Musk Fan", tweet: document.getElementById("input").value}
  document.getElementById("input").value = ""

  fetch("/api/tweets", {method: "POST", headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, body: JSON.stringify(json)}) 
  .then(res => res.json())
  .then(response => console.log(response))

  fetch("/api/tweets")
  .then(response => response.json())
  .then(response => loadTweets(response))
})
