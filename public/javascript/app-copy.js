const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = hpCharacters.filter((movies) => {
    return movies.title.toLowerCase().includes(searchString);
    // movies.house.toLowerCase().includes(searchString)
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/movies");
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (movies) => {
  const htmlString = movies
    .slice(0, 6)
    .map((movies) => {
      return `
            <li class="character">
                <h2>${movies.title}</h2>
                 <p>Release: ${movies.release}</p>
                <img src="${movies.image}"></img>
            </li>
        `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

// if (username && email && password) {
const response = await fetch("/api/movies", {
  method: "post",
  body: JSON.stringify({
    title,
    post_url,
    release,
  }),
  headers: { "Content-Type": "application/json" },
});
if (response.ok) {
  document.location.replace("/dashboard");

  console.log("success");
} else {
  alert(response.statusText);
}
// }

loadCharacters();
