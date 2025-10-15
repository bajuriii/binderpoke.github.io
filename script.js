document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("card-grid");
  const search = document.getElementById("search");

  // LEVEL 1: Negara
  const countries = [
    { name: "Indonesia", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg", region: "ID" },
    { name: "US/Global", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg", region: "US" },
    { name: "Japan", flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg", region: "JP" }
  ];

  // LEVEL 2: Seri utama
  const mainSeries = {
    ID: [
      "MATAHARI & BULAN",
      "PEDANG DAN PERISAI",
      "POKEMON GO",
      "SCARLET & VIOLET"
    ],
    US: ["Base Set", "Jungle", "Fossil", "Team Rocket"],
    JP: ["SM1", "SM2", "S", "SV"]
  };

  // LEVEL 3: Sub-seri
  const subSeries = {
    "MATAHARI & BULAN": ["AS1a", "AS1b", "AS2a", "AS2b"],
    "PEDANG DAN PERISAI": ["S1a", "S1b", "S2a", "S2b"],
    "POKEMON GO": ["PGO"],
    "SCARLET & VIOLET": ["SV1a", "SV1b", "SV2a", "SV2b"]
  };

  // LEVEL 4: Kartu per sub-seri
  const cardsData = {
    AS1a: [
      { name: "Karrablast", image: "https://images.pokemontcg.io/sm1/1.png", type: "Grass" },
      { name: "Alolan Marowak", image: "https://images.pokemontcg.io/sm1/12.png", type: "Fire" },
      { name: "Entei GX", image: "https://images.pokemontcg.io/sm1/21.png", type: "Fire" },
      { name: "Numel", image: "https://images.pokemontcg.io/sm1/24.png", type: "Fire" },
      { name: "Shining Ho-Oh", image: "https://images.pokemontcg.io/sm1/30.png", type: "Shining" }
    ]
  };

  // Render UI
  function renderCards(list, type = "country", parentKey = null) {
    grid.innerHTML = "";

    list.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";

      if (type === "country") {
        div.innerHTML = `
          <img src="${item.flag}" alt="${item.name}">
          <h3>${item.name}</h3>
        `;
        div.addEventListener("click", () => showMainSeries(item.region));
      }

      if (type === "main") {
        div.innerHTML = `<h3>${item}</h3>`;
        div.addEventListener("click", () => showSubSeries(item));
      }

      if (type === "sub") {
        div.innerHTML = `<h3>${item}</h3><p>Klik untuk lihat kartu</p>`;
        div.addEventListener("click", () => showCards(item));
      }

      if (type === "card") {
        div.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.type}</p>
        `;
      }

      grid.appendChild(div);
    });
  }

  // Tampilkan seri utama
  function showMainSeries(region) {
    const list = mainSeries[region] || [];
    renderCards(list, "main");
  }

  // Tampilkan sub-seri
  function showSubSeries(seriesName) {
    const list = subSeries[seriesName] || [];
    renderCards(list, "sub");
  }

  // Tampilkan kartu per sub-seri
  function showCards(subName) {
    const list = cardsData[subName] || [];
    if (list.length === 0) {
      grid.innerHTML = `<p>Tidak ada data kartu untuk seri ${subName}.</p>`;
    } else {
      renderCards(list, "card");
    }
  }

  // Render pertama
  renderCards(countries, "country");

  // Fitur pencarian
  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    const cards = Array.from(grid.querySelectorAll(".card"));
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(value) ? "" : "none";
    });
  });
});
