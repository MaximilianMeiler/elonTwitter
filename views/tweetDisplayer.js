let tweets = document.getElementById("tweets")

fetch("/api/tweets")
.then(response => response.json())
.then(response => console.log(response))




const submit = document.getElementById("tweetButton")
console.log(submit)

submit.addEventListener("click", function() {
  console.log("TEST")
  let json = {author: "Elon Musk", tweet: document.getElementById("input").value}

  //asyncPost()
  
  fetch("/api/tweets", {method: "POST", headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, body: JSON.stringify(json)}) 
  .then(res => res.json())
  .then(response => console.log(response))
})
/*
const asyncPost = async () => {
  try {
    const response = await fetch("api/tweets", {method: "POST", headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({tweet: "Yes", author:"Ben"})});
    const data = await response.json();
    console.log(data)
  } catch(error) {
    console.log(error);
  }
}*/