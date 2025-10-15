async function renderCardList(region, serieName, subSerie) {
  const ownedKey = `owned_${subSerie.replace(/\s+/g, "_")}`;
  const ownedCards = JSON.parse(localStorage.getItem(ownedKey)) || {};

  grid.innerHTML = `<button id="back-btn" class="back-btn">⬅️ Kembali</button>`;
  document.getElementById("back-btn").addEventListener("click", () => renderSubSeries(region, serieName));

  // Ambil kode sub-seri, misal "AS1a" dari "AS1a - Hantaman Pertama (Set A)"
  const subSerieKode = subSerie.split(" - ")[0];

  try {
    // Fetch data JSON dari folder cards/
    const res = await fetch(`data/id/series/sub-series/cards/${subSerieKode}.json`);
    if (!res.ok) throw new Error("Gagal load JSON");
    const cards = await res.json();

    if (!cards.length) {
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

  } catch (err) {
    console.error(err);
    const msg = document.createElement("p");
    msg.textContent = "Gagal memuat data kartu.";
    grid.appendChild(msg);
  }
}

