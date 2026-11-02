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
//fetch() api
fetch("https://api.tvmaze.com/search/shows?q=the-chosen")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

