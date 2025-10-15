document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    { name: "Pokemon TCG ID", image: "https://flagcdn.com/w320/id.png", type: "indonesia" },
    { name: "Pokemon TCG US/Global", image: "https://flagcdn.com/w320/us.png", type: "US/Global" },
    { name: "Pokemon TCG Japan", image: "https://flagcdn.com/w320/jp.png", type: "Japan" }
  ];

  const grid = document.getElementById("card-grid");
  const search = document.getElementById("search");

  function renderCards(list) {
    grid.innerHTML = "";
    list.forEach(card => {
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

  renderCards(cards);

  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    const filtered = cards.filter(c => c.name.toLowerCase().includes(value));
    renderCards(filtered);
  });
});

