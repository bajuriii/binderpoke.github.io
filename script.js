document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("card-grid");
  const search = document.getElementById("search");

  const flags = [
    { name: "Pokemon TCG ID", image: "https://flagcdn.com/w320/id.png", file: "Indonesia_series.json" },
    { name: "Pokemon TCG Global", image: "https://flagcdn.com/w320/us.png", file: "Global_series.json" },
    { name: "Pokemon TCG Japan", image: "https://flagcdn.com/w320/jp.png", file: "Japan_series.json" }
  ];

  function renderFlags() {
    grid.innerHTML = "";
    search.style.display = "none";
    const title = document.createElement("h2");
    title.textContent = "🌎 Pilih Wilayah Pokémon TCG";
    grid.appendChild(title);

    flags.forEach(flag => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<img src="${flag.image}"><h3>${flag.name}</h3>`;
      div.addEventListener("click", () => renderSeries(flag.file));
      grid.appendChild(div);
    });
  }

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
        div.addEventListener("click", () => renderHybridSeries(series.file));
        grid.appendChild(div);
      });
    } catch(err) {
      console.error(err);
      grid.innerHTML += "<p>Gagal load seri.</p>";
    }
  }

  async function renderHybridSeries(jsonFile) {
    grid.innerHTML = `<button class="back-btn">⬅️ Kembali</button>`;
    document.querySelector(".back-btn").addEventListener("click", renderFlags);

    try {
      const res = await fetch(`data/${jsonFile}`);
      const data = await res.json();

      data.sub_seri.forEach(sub => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>${sub.kode} - ${sub.nama}</h3>`;
        div.addEventListener("click", () => renderCardList(sub, jsonFile));
        grid.appendChild(div);
      });
    } catch(err) {
      console.error(err);
      grid.innerHTML += "<p>Gagal load sub-seri.</p>";
    }
  }

  function renderCardList(sub, parentFile) {
    grid.innerHTML = `<button class="back-btn">⬅️ Kembali</button>`;
    document.querySelector(".back-btn").addEventListener("click", () => renderHybridSeries(parentFile));

    if (!sub.kartu || !sub.kartu.length) {
      grid.innerHTML += `<p>Belum ada kartu di sub-seri ini.</p>`;
      return;
    }

    sub.kartu.forEach(card => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${card.image}" alt="${card.name}">
        <h3>${card.id} - ${card.name}</h3>
      `;
      grid.appendChild(div);
    });
  }

  renderFlags();
});
