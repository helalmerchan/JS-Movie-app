const movies = [
    {
        name: "Avengers Movie",
        poster: "https://m.media-amazon.com/images/I/71wwUV0wY8L._AC_UF1000,1000_QL80_.jpg",
        rating: 8.8
    },
    {
        name: "Animal",
        poster: "https://m.media-amazon.com/images/I/91zTlD7AY1L.jpg",
        rating: 7.9
    },
    {
        name: "Star Wars EP7 ",
        poster: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
        rating: 8.9
    },
    {
        name: "Jocker Movie",
        poster: "https://i.ebayimg.com/images/g/hWIAAOSwSgddZ-7M/s-l1600.jpg",
        rating: 8.3
    },
    {
        name: "65 2023 Original Theatrical",
        poster: "https://i.ebayimg.com/images/g/dEUAAOSwECtkD628/s-l1200.webp",
        rating: 7.6
    },
    {
        name: "The Last Of Us",
        poster: "https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp",
        rating: 8.4
    }
]

function searchMovie(){
    let movieName = document.getElementById("search").value;
   
    if(movieName !== ""){
        let result = movies.filter(function(movie){
                return movie.name.toUpperCase().includes(movieName.toUpperCase());
            });

            if(result.length == -1){
                movieShows("Sorry no movies found!");
            } 
            movieShows(result);
            
    }  else {
        movieShows(movies);
    } 
}


function movieShows(data){
    // let movie = document.createElement("div");
    // movie.classList.add("movie"); 

    // let overlay = document.createElement("div");
    // overlay.classList.add("overlay");

    // let video = document.createElement("div");
    // video.classList.add("video");

    // movie.appendChild(overlay);
    // overlay.appendChild(video);

    // console.log(movie);

    document.getElementById("movies").innerHTML = "";

    let htmlString = ``;

    for(let i = 0; i < data.length; i++){
        htmlString = htmlString + `<div class="movie">
        <div class="overlay">
            <div class="video"></div>
            <div class="details">
                <h2>${data[i].name}</h2>
                <h4>IMDB: ${data[i].rating}</h4>
                <p>Actors: Jhon doe , Jamie Diomond , Ander Taker</p>
            </div>
        </div>
        <img src="${data[i].poster}" alt="">
        </div>`
    }

    document.getElementById("movies").innerHTML = htmlString;
}

movieShows(movies);

