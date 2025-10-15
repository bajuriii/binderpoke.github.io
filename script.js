document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("card-grid");
  const search = document.getElementById("search");

  const flags = [
    { name: "Pokemon TCG ID", image: "https://flagcdn.com/w320/id.png", region: "Indonesia" },
    { name: "Pokemon TCG US/Global", image: "https://flagcdn.com/w320/us.png", region: "Global" },
    { name: "Pokemon TCG Japan", image: "https://flagcdn.com/w320/jp.png", region: "Japan" },
  ];

  const mainSeries = {
    Indonesia: [
      { name: "Matahari & Bulan", subs: ["AS1A - Matahari", "AS2B - Bulan", "AS3A - Legenda"] },
      { name: "Pedang dan Perisai", subs: ["S1A - Awal", "S2B - Perisai Baja"] },
      { name: "Pokémon GO", subs: ["GO1", "GO2"] },
      { name: "Scarlet & Violet", subs: ["SV1A - Awal Baru", "SV2B - Paradox Rift"] }
    ]
  };

  // Dummy data sementara (nanti bisa diganti JSON)
  const cardDatabase = {
    "AS1A - Matahari": [
      { id: "001", name: "Pikachu", image: "https://images.pokemontcg.io/base1/58.png" },
      { id: "002", name: "Charmander", image: "https://images.pokemontcg.io/base1/46.png" },
      { id: "003", name: "Squirtle", image: "https://images.pokemontcg.io/base1/63.png" }
    ],
    "AS2B - Bulan": [
      { id: "001", name: "Bulbasaur", image: "https://images.pokemontcg.io/base1/44.png" },
      { id: "002", name: "Ivysaur", image: "https://images.pokemontcg.io/base1/30.png" }
    ]
  };

  function renderFlags() {
    grid.innerHTML = "";
    search.style.display = "none";
    flags.forEach(flag => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${flag.image}" alt="${flag.name}">
        <h3>${flag.name}</h3>
        <p>${flag.region}</p>
      `;
      div.addEventListener("click", () => renderMainSeries(flag.region));
      grid.appendChild(div);
    });
  }

  function renderMainSeries(region) {
    grid.innerHTML = `<button id="back-btn" class="back-btn">⬅️ Kembali</button>`;
    document.getElementById("back-btn").addEventListener("click", renderFlags);
    mainSeries[region].forEach(serie => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${serie.name}</h3>`;
      div.addEventListener("click", () => renderSubSeries(region, serie.name));
      grid.appendChild(div);
    });
  }

  function renderSubSeries(region, serieName) {
    grid.innerHTML = `<button id="back-btn" class="back-btn">⬅️ Kembali</button>`;
    document.getElementById("back-btn").addEventListener("click", () => renderMainSeries(region));
    const serie = mainSeries[region].find(s => s.name === serieName);
    serie.subs.forEach(sub => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${sub}</h3>`;
      div.addEventListener("click", () => renderCardList(region, serieName, sub));
      grid.appendChild(div);
    });
  }

  function renderCardList(region, serieName, subSerie) {
    const ownedKey = `owned_${subSerie.replace(/\s+/g, "_")}`;
    const ownedCards = JSON.parse(localStorage.getItem(ownedKey)) || {};

    grid.innerHTML = `<button id="back-btn" class="back-btn">⬅️ Kembali</button>`;
    document.getElementById("back-btn").addEventListener("click", () => renderSubSeries(region, serieName));

    const cards = cardDatabase[subSerie] || [];
    cards.forEach(card => {
      const div = document.createElement("div");
      div.className = "card";
      const isOwned = ownedCards[card.id];

      div.innerHTML = `
        <img src="${card.image}" alt="${card.name}" style="filter: ${isOwned ? "none" : "grayscale(100%)"}">
        <h3>${card.id} - ${card.name}</h3>
        <label>
          <input type="checkbox" ${isOwned ? "checked" : ""}> Punya
        </label>
      `;

      const checkbox = div.querySelector("input");
      const img = div.querySelector("img");

      checkbox.addEventListener("change", () => {
        ownedCards[card.id] = checkbox.checked;
        img.style.filter = checkbox.checked ? "none" : "grayscale(100%)";
        localStorage.setItem(ownedKey, JSON.stringify(ownedCards));
      });

      grid.appendChild(div);
    });
  }

  renderFlags();
});
