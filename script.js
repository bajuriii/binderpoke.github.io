document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    { name: "Pikachu", image: "https://images.pokemontcg.io/base1/58.png", type: "Listrik" },
    { name: "Charmander", image: "https://images.pokemontcg.io/base1/46.png", type: "Api" },
    { name: "Squirtle", image: "https://images.pokemontcg.io/base1/63.png", type: "Air" }
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
