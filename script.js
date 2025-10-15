document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("card-grid");
  const search = document.getElementById("search");

  const flags = [
    { name: "Pokemon TCG ID", image: "https://flagcdn.com/w320/id.png", region: "Indonesia" },
  ];

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
          "SC3a - VMAX Berkilau (Set A)",
          "SC3b - VMAX Berkilau (Set B)",
          "S5R - Master Serangan Beruntun",
          "S5L1 - Master Serangan Tunggal",
          "S6H - Dua Pilar Petarung",
          "S6K - Astral Gelap Gulita",
          "S6S - Ganjur Salju Perak",
          "S6a - Para Eevee Pahlawan",
          "S7R - Arus Langit Biru",
          "S7L - Pencakar Langit Sempurna",
          "S8P - Peringatan Perayaan 25 Tahun",
          "S8F - Teknik Fusion",
          "S8B - VMAX Klimaks",
          "S9 - Star Birth",
          "S10a - Pertarungan Daerah",
          "S10D - Pengamat Waktu",
          "S10P - Penyulap Ruang",
          "S10a - Fantom Kegelapan",
          "S11a - Neraka Sirna",
          "S11a - Arkana Memuncak",
          "S17 - Pemicu Paradigma",
          "S12a - VSTAR Semesta"
        ]
      },
      {
        name: "Pokémon GO",
        subs: ["PGO1 - Pokémon GO"]
      },
      {
        name: "Scarlet & Violet",
        subs: [
          "SV1S - Scarlet EX",
          "SV1V - Violet EX",
          "SV1A - Hantaman Triplet",
          "SV2D - Letusan Tanah",
          "SV2P - Mara Bahaya Salju",
          "SV2A - Kartu Pokémon 151",
          "SV3S - Kilau Hitam",
          "SV4S - Pertemuan Paradoks",
          "SV4A - Harta Berkilau ex",
          "SV5S - Paradoks Andalan",
          "SV6S - Topeng Transfigurasi",
          "SV7S - Bimbingan Rasi",
          "SV8S - Kilat Rasi",
          "SV9S - Festival Terastal EX",
          "SV9S - Ikatan Takdir",
          "SV10S - Kehadiran Juara",
          "SV11S - Hitam & Putih",
          "MA1 - Evolusi Mega"
        ]
      }
    ]
  };

  const cardDatabase = {
    "AS1a - Hantaman Pertama (Set A)": [
      { id: "001", name: "Pikachu", image: "https://images.pokemontcg.io/base1/58.png" },
      { id: "002", name: "Charmander", image: "https://images.pokemontcg.io/base1/46.png" },
      { id: "003", name: "Squirtle", image: "https://images.pokemontcg.io/base1/63.png" }
    ],
    "PGO1 - Pokémon GO": [
      { id: "001", name: "Mewtwo V", image: "https://images.pokemontcg.io/pgo/72.png" },
      { id: "002", name: "Snorlax", image: "https://images.pokemontcg.io/pgo/55.png" }
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
