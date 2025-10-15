document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("card-grid");
  const search = document.getElementById("search");

  // 🌍 Bendera Wilayah
  const flags = [
{ name: "Pokemon TCG ID", image: "https://flagcdn.com/w320/id.png", region: "Indonesia" },
    { name: "Pokemon TCG Global", image: "https://flagcdn.com/w320/us.png", region: "Global" },
    { name: "Pokemon TCG Japan", image: "https://flagcdn.com/w320/jp.png", region: "Japan" },
  ];

  // ⚡ Seri Utama per Wilayah
  const mainSeries = {
    Indonesia: [
      {
        name: "Matahari & Bulan",
        subs: [
          "AS1a - Hantaman Pertama (Set A)",
          "AS1b - Hantaman Pertama (Set B)",
          "AS2a - Kebangkitan Legenda (Set A)",
          "AS2b - Kebangkitan Legenda (Set B)",
          "AS3a - Bayangan Tersembunyi (Set A)",
          "AS3b - Bayangan Tersembunyi (Set B)",
          "AS4a - Penguasa Langit (Set A)",
          "AS4b - Penguasa Langit (Set B)",
          "AC3a - Koleksi Tag Team (Set A)",
          "AC3b - Koleksi Tag Team (Set B)"
        ]
      },
      {
        name: "Pedang dan Perisai",
        subs: [
          "S1 - Pedang dan Perisai (Set A)",
          "S1 - Pedang dan Perisai (Set B)",
          "SC3a - VMAX Berkilau (Set A)",
          "SC3b - VMAX Berkilau (Set B)"
        ]
      },
      {
        name: "Pokémon GO",
        subs: ["GO1 - Pokémon GO"]
      },
      {
        name: "Scarlet & Violet",
        subs: [
          "SV1S - Scarlet EX",
          "SV1V - Violet EX",
          "SV2A - Hantaman Triplet",
          "SV2D - Letusan Tanah"
        ]
      }
    ]
  };

  // 🧩 Data kartu contoh (bisa diisi nanti dengan JSON)
  const cardDatabase = {
    "AS1a - Hantaman Pertama (Set A)": [
      { id: "001", name: "Pikachu", image: "https://images.pokemontcg.io/base1/58.png" },
      { id: "002", name: "Charmander", image: "https://images.pokemontcg.io/base1/46.png" },
      { id: "003", name: "Squirtle", image: "https://images.pokemontcg.io/base1/63.png" }
    ]
  };

  // ========== RENDER FUNCTIONS ==========
  function renderFlags() {
    grid.innerHTML = "";
    search.style.display = "none";
    const title = document.createElement("h2");
    title.textContent = "🌎 Pilih Wilayah Pokémon TCG";
    grid.appendChild(title);

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
    if (cards.length === 0) {
      const msg = document.createElement("p");
      msg.textContent = "Belum ada data kartu untuk seri ini.";
      grid.appendChild(msg);
      return;
    }

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



