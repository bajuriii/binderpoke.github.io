document.addEventListener("DOMContentLoaded", () => {
  // ======================
  // 🗺️ 1️⃣ Data bendera negara + seri
  // ======================
  const countries = [
    { 
      name: "Indonesia", 
      image: "https://flagcdn.com/w320/id.png", 
      type: "🇮🇩 Seri Indonesia",
      sets: [
        { name: "MATAHARI & BULAN", code: "SM" },
        { name: "PEDANG DAN PERISAI", code: "SWSH" },
        { name: "POKEMON GO", code: "PGO" },
        { name: "SCARLET & VIOLET", code: "SV" }
      ]
    },
    { 
      name: "Japan", 
      image: "https://flagcdn.com/w320/jp.png", 
      type: "🇯🇵 Seri Jepang",
      sets: []
    },
    { 
      name: "Global", 
      image: "https://flagcdn.com/w320/us.png", 
      type: "🌍 Seri Global/Internasional",
      sets: []
    }
  ];

  const grid = document.getElementById("card-grid");
  const search = document.getElementById("search");
  let currentView = "countries";

  // ======================
  // 2️⃣ Render daftar negara
  // ======================
  function renderCountries(list) {
    grid.innerHTML = "";
    list.forEach(country => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${country.image}" alt="${country.name}">
        <h3>${country.name}</h3>
        <p>${country.type}</p>
      `;
      div.addEventListener("click", () => showSeries(country));
      grid.appendChild(div);
    });
  }

  // ======================
  // 3️⃣ Render daftar seri dari negara
  // ======================
  function showSeries(country) {
    currentView = country.name;
    grid.innerHTML = `
      <button id="back-btn" class="card" style="grid-column: 1 / -1; background:#21262d; cursor:pointer;">
        ⬅️ Kembali
      </button>
    `;

    if (country.sets.length === 0) {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<p>Belum ada seri untuk ${country.name}</p>`;
      grid.appendChild(div);
    } else {
      country.sets.forEach(set => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
          <h3>${set.name}</h3>
          <p>Kode: ${set.code}</p>
        `;
        grid.appendChild(div);
      });
    }

    // Tombol kembali
    document.getElementById("back-btn").addEventListener("click", () => {
      renderCountries(countries);
      currentView = "countries";
    });
  }

  // ======================
  // 4️⃣ Fungsi pencarian
  // ======================
  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    if (currentView === "countries") {
      const filtered = countries.filter(c => c.name.toLowerCase().includes(value));
      renderCountries(filtered);
    }
  });

  // ======================
  // 5️⃣ Render awal
  // ======================
  renderCountries(countries);
});
