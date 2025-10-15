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
    ],
    Global: [
      { name: "Base Set", subs: ["Base Set", "Jungle", "Fossil"] },
      { name: "Sword & Shield", subs: ["Base", "Vivid Voltage", "Evolving Skies"] },
      { name: "Scarlet & Violet", subs: ["Base", "Obsidian Flames", "Temporal Forces"] },
    ],
    Japan: [
      { name: "スカーレット&バイオレット", subs: ["SV1a トリプレットビート", "SV2a スノーハザード"] },
      { name: "ソード&シールド", subs: ["S1H 拡張パック", "S2D 反逆クラッシュ"] }
    ]
  };

  // 🔹 Halaman awal: bendera
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

  // 🔹 Seri utama
  function renderMainSeries(region) {
    grid.innerHTML = `
      <button id="back-btn" class="back-btn">⬅️ Kembali</button>
    `;
    document.getElementById("back-btn").addEventListener("click", renderFlags);

    mainSeries[region].forEach(serie => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${serie.name}</h3>`;
      div.addEventListener("click", () => renderSubSeries(region, serie.name));
      grid.appendChild(div);
    });
  }

  // 🔹 Sub-seri
  function renderSubSeries(region, serieName) {
    grid.innerHTML = `
      <button id="back-btn" class="back-btn">⬅️ Kembali</button>
    `;
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

  // 🔹 Daftar kartu dalam sub-seri
  function renderCardList(region, serieName, subSerie) {
    grid.innerHTML = `
      <button id="back-btn" class="back-btn">⬅️ Kembali</button>
    `;
    document.getElementById("back-btn").addEventListener("click", () => renderSubSeries(region, serieName));

    // ⚠️ Nanti ini bisa diganti ambil data dari JSON / API
    const dummyCards = [
      { name: "Pikachu", image: "https://images.pokemontcg.io/base1/58.png", type: "Listrik" },
      { name: "Charmander", image: "https://images.pokemontcg.io/base1/46.png", type: "Api" },
      { name: "Squirtle", image: "https://images.pokemontcg.io/base1/63.png", type: "Air" }
    ];

    dummyCards.forEach(card => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${card.image}" alt="${card.name}">
        <h3>${card.name}</h3>
        <p>${card.type}</p>
      `;
      grid.appendChild(div);
    });
  }

  renderFlags(); // halaman awal
});
