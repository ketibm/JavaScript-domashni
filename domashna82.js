function fetchDataCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("container");
      data.results.forEach((el) => {
        const card = document.createElement("div");
        card.className = "card";
        container.appendChild(card);

        const images = document.createElement("img");
        images.src = el.image;
        card.appendChild(images);

        const cardContent = document.createElement("div");
        cardContent.className = "cardContent";
        card.appendChild(cardContent);

        const names = document.createElement("h3");
        names.textContent = el.name;
        cardContent.appendChild(names);

        const genders = document.createElement("p");
        genders.textContent = "Gender: " + el.gender;
        cardContent.appendChild(genders);

        const status = document.createElement("p");
        status.textContent = "Status: " + el.status;
        cardContent.appendChild(status);
        cardContent.className = el.status.toLowerCase();
        // if (el.status === "Alive") {
        //   cardContent.className = "alive";
        // } else if (el.status === "Dead") {
        //   cardContent.className = "dead";
        // } else {
        //   cardContent.className = "unknown";
        // }

        const numberOfEpisodes = document.createElement("p");
        numberOfEpisodes.textContent = "Episodes: " + el.episode.length;
        cardContent.appendChild(numberOfEpisodes);
      });
    })
    .catch((error) => console.log(error));
}
fetchDataCharacters();
