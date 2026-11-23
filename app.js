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
let tvsync = [];

console.log("app.js loading");
//fetch() api
fetch("https://api.tvmaze.com/search/shows?q=spider-man")
.then(response => response.json())
.then(data => {
   tvsync = data;
   displayShows(tvsync);
})
.catch(error => console.error(error));

function displayShow(shows) {
      let collection =
        document.getElementById("showFeature");
    if (!collection) {
        return;
    }
    collection.innerHTML = "";
    let fragment =
        document.createDocumentFragment();

    for (let item of shows){
        let show = 
        new Show(
                item.show.id,
                item.show.name,
                item.show.genres,
                item.show.rating,
                item.show.image
            );
        let card =
            document.createElement("section");

    }
}

