//data modeling
class Show {
    constructor(id,name, genres, rating, image) {
        this.id = id;
        this.name = name;
        this.genres = genres;
        this.rating = rating;
        this.image = image;
    }
}

console.log("app.js loading");
//fetch() api
fetch("https://api.tvmaze.com/search/shows?q=spider-man")
.then(response => response.json())
.then(data => {
    const shows = [];
    

});
.catch(error => console.error(error));

