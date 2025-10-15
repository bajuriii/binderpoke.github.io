document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("card-grid");
  const search = document.getElementById("search");

  const flags = [
    { name: "Pokemon TCG ID", image: "https://flagcdn.com/w320/id.png", region: "Indonesia", file: "Indonesia_series.json" },
    { name: "Pokemon TCG Global", image: "https://flagcdn.com/w320/us.png", region: "Global", file: "Global_series.json" },
    { name: "Pokemon TCG Japan", image: "https://flagcdn.com/w320/jp.png", region: "Japan", file: "Japan_series.json" }
  ];

  // ======= Render Wilayah =======
  function renderFlags() {
    grid.innerHTML = "";
    search.style.display = "none";

    const title = document.createElement("h2");
    title.textContent = "🌎 Pilih Wilayah Pokémon TCG";
    grid.appendChild(title);

    flags.forEach(flag => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<img src="${flag.image}" alt="${flag.name}"><h3>${flag.name}</h3>`;
      div.addEventListener("click", () => renderSeries(flag.file));
      grid.appendChild(div);
    });
  }

  // ======= Render Seri Utama =======
  async function renderSeries(jsonFile) {
    grid.innerHTML = `<button class="back-btn">⬅️ Kembali</button>`;
    document.querySelector(".back-btn").addEventListener("click", renderFlags);

    try {
      const res = await fetch(`data/${jsonFile}`);
      const seriesList = await res.json();

      seriesList.forEach(series => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>${series.seri}</h3>`;
        div.addEventListener("click", () => renderHybridSeries(series.file, jsonFile));
        grid.appendChild(div);
      });
    } catch (err) {
      console.error(err);
      grid.innerHTML += `<p>Gagal memuat data seri.</p>`;
    }
  }

  // ======= Render Sub-Seri =======
  async function renderHybridSeries(jsonFile, parentJSON) {
    grid.innerHTML = `<button class="back-btn">⬅️ Kembali</button>`;
    document.querySelector(".back-btn").addEventListener("click", () => renderSeries(parentJSON));

    try {
      const res = await fetch(`data/${jsonFile}`);
      const seriesData = await res.json();

      seriesData.sub_seri.forEach(sub => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>${sub.kode} - ${sub.nama}</h3>`;
        div.addEventListener("click", () => renderCardList(sub, jsonFile));
        grid.appendChild(div);
      });
    } catch (err) {
      console.error(err);
      grid.innerHTML += `<p>Gagal memuat sub-seri.</p>`;
    }
  }

  // ======= Render Daftar Kartu =======
  function renderCardList(sub, parentJSON) {
    grid.innerHTML = `<button class="back-btn">⬅️ Kembali</button>`;
    document.querySelector(".back-btn").addEventListener("click", () => renderHybridSeries(parentJSON, parentJSON));

    const ownedKey = `owned_${sub.kode}`;
    const ownedCards = JSON.parse(localStorage.getItem(ownedKey)) || {};

    if (!sub.kartu || !sub.kartu.length) {
      grid.innerHTML += `<p>Belum ada kartu di sub-seri ini.</p>`;
      return;
    }

    sub.kartu.forEach(card => {
      const div = document.createElement("div");
      div.className = "card";
      const isOwned = ownedCards[card.id];

      div.innerHTML = `
        <img src="${card.image}" alt="${card.name}" style="filter: ${isOwned ? "none" : "grayscale(100%)"}">
        <h3>${card.id} - ${card.name}</h3>
        <label><input type="checkbox" ${isOwned ? "checked" : ""}> Punya</label>
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
