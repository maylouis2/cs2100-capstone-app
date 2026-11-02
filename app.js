

fetch("https://api.tvmaze.com/search/shows?q=the-chosen")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));