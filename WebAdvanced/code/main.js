
const animeGrid = document.getElementById("animeGrid");

animeGrid.innerHTML = "<p>Loading top anime...</p>";

fetch("https://api.jikan.moe/v4/top/anime?limit=20")
  .then(response => response.json())
  .then(data => {
    animeGrid.innerHTML = "";

    data.data.forEach(anime => {
      const card = document.createElement("div");
      card.classList.add("anime-card");

      card.innerHTML = `
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
        <h3>${anime.title}</h3>
        <p>Genre: ${anime.genres[0]?.name || "?"}</p>
        <p>Jaar: ${anime.aired.prop.from?.year || "?"}</p>
        <p>Score: ${anime.score || "?"}</p>
      `;

      animeGrid.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Fout bij het ophalen van anime:", error);
    animeGrid.innerHTML = "<p>Er ging iets mis bij het laden 😢</p>";
  });
