const movieList = document.getElementById("movieList");
const searchBar = document.getElementById("searchBar");
let hpMovies = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredMovies = hpmovies.filter((movies) => {
    return movies.title.toLowerCase().includes(searchString);
    // movies.house.toLowerCase().includes(searchString)
  });
  displayMovies(filteredMovies);
});

const loadMovies = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/movies");
    hpMovies = await res.json();
    displayMoviesM(hpMovies);
  } catch (err) {
    console.error(err);
  }
};

const displayMovies = (movies) => {
  const htmlString = movies
    .slice(0, 6)
    .map((movies) => {
      return `
            <li class="moviesList">
                <h2>${movies.title}</h2>
                 <p>Release: ${movies.release}</p>
            </li>
        `;
    })
    .join("");
  movieList.innerHTML = htmlString;
};

loadMovies();
