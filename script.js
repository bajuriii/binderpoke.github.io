document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("card-grid");
  const search = document.getElementById("search");

  // 🌍 Bendera Wilayah
  const flags = [
{id:"001/171",name:"Bulbasaur",image: "https://asia.pokemon-card.com/id/card-img/id00001344.png" },
{id:"002/171",name:"Ivysaur",image: "https://asia.pokemon-card.com/id/card-img/id00001345.png" },
{id:"003/171",name:"Venusaur",image: "https://asia.pokemon-card.com/id/card-img/id00001346.png" },
{id:"004/171",name:"Caterpie",image: "https://asia.pokemon-card.com/id/card-img/id00001347.png" },
{id:"005/171",name:"Metapod",image: "https://asia.pokemon-card.com/id/card-img/id00001348.png" },
{id:"006/171",name:"Butterfree",image: "https://asia.pokemon-card.com/id/card-img/id00001349.png" },
{id:"007/171",name:"Ledyba",image: "https://asia.pokemon-card.com/id/card-img/id00001350.png" },
{id:"008/171",name:"Ledian",image: "https://asia.pokemon-card.com/id/card-img/id00001351.png" },
{id:"009/171",name:"Pinsir",image: "https://asia.pokemon-card.com/id/card-img/id00001352.png" },
{id:"010/171",name:"Surskit",image: "https://asia.pokemon-card.com/id/card-img/id00001353.png" },
{id:"011/171",name:"Masquerain",image: "https://asia.pokemon-card.com/id/card-img/id00001354.png" },
{id:"012/171",name:"Shroomish",image: "https://asia.pokemon-card.com/id/card-img/id00001355.png" },
{id:"013/171",name:"Breloom",image: "https://asia.pokemon-card.com/id/card-img/id00001356.png" },
{id:"014/171",name:"Charmander",image: "https://asia.pokemon-card.com/id/card-img/id00001357.png" },
{id:"015/171",name:"Charmeleon",image: "https://asia.pokemon-card.com/id/card-img/id00001358.png" },
{id:"016/171",name:"Charizard-GX",image: "https://asia.pokemon-card.com/id/card-img/id00001359.png" },
{id:"017/171",name:"Vulpix",image: "https://asia.pokemon-card.com/id/card-img/id00001360.png" },
{id:"018/171",name:"Ninetales",image: "https://asia.pokemon-card.com/id/card-img/id00001361.png" },
{id:"019/171",name:"Growlithe",image: "https://asia.pokemon-card.com/id/card-img/id00001362.png" },
{id:"020/171",name:"Arcanine",image: "https://asia.pokemon-card.com/id/card-img/id00001363.png" },
{id:"021/171",name:"Numel",image: "https://asia.pokemon-card.com/id/card-img/id00001364.png" },
{id:"022/171",name:"Camerupt",image: "https://asia.pokemon-card.com/id/card-img/id00001365.png" },
{id:"023/171",name:"Tepig",image: "https://asia.pokemon-card.com/id/card-img/id00001366.png" },
{id:"024/171",name:"Pignite",image: "https://asia.pokemon-card.com/id/card-img/id00001367.png" },
{id:"025/171",name:"Emboar",image: "https://asia.pokemon-card.com/id/card-img/id00001368.png" },
{id:"026/171",name:"Squirtle",image: "https://asia.pokemon-card.com/id/card-img/id00001369.png" },
{id:"027/171",name:"Wartortle",image: "https://asia.pokemon-card.com/id/card-img/id00001370.png" },
{id:"028/171",name:"Blastoise-GX",image: "https://asia.pokemon-card.com/id/card-img/id00001371.png" },
{id:"029/171",name:"Horsea",image: "https://asia.pokemon-card.com/id/card-img/id00001372.png" },
{id:"030/171",name:"Seadra",image: "https://asia.pokemon-card.com/id/card-img/id00001373.png" },
{id:"031/171",name:"Kingdra",image: "https://asia.pokemon-card.com/id/card-img/id00001374.png" },
{id:"032/171",name:"Remoraid",image: "https://asia.pokemon-card.com/id/card-img/id00001375.png" },
{id:"033/171",name:"Octillery",image: "https://asia.pokemon-card.com/id/card-img/id00001376.png" },
{id:"034/171",name:"Corsola",image: "https://asia.pokemon-card.com/id/card-img/id00001377.png" },
{id:"035/171",name:"Swinub",image: "https://asia.pokemon-card.com/id/card-img/id00001378.png" },
{id:"036/171",name:"Piloswine",image: "https://asia.pokemon-card.com/id/card-img/id00001379.png" },
{id:"037/171",name:"Mamoswine",image: "https://asia.pokemon-card.com/id/card-img/id00001380.png" },
{id:"038/171",name:"Shellder",image: "https://asia.pokemon-card.com/id/card-img/id00001381.png" },
{id:"039/171",name:"Cloyster",image: "https://asia.pokemon-card.com/id/card-img/id00001382.png" },
{id:"040/171",name:"Pikachu",image: "https://asia.pokemon-card.com/id/card-img/id00001383.png" },
{id:"041/171",name:"Raichu",image: "https://asia.pokemon-card.com/id/card-img/id00001384.png" },
{id:"042/171",name:"Mareep",image: "https://asia.pokemon-card.com/id/card-img/id00001385.png" },
{id:"043/171",name:"Flaaffy",image: "https://asia.pokemon-card.com/id/card-img/id00001386.png" },
{id:"044/171",name:"Ampharos",image: "https://asia.pokemon-card.com/id/card-img/id00001387.png" },
{id:"045/171",name:"Plusle",image: "https://asia.pokemon-card.com/id/card-img/id00001388.png" },
{id:"046/171",name:"Minun",image: "https://asia.pokemon-card.com/id/card-img/id00001389.png" },
{id:"047/171",name:"Electrike",image: "https://asia.pokemon-card.com/id/card-img/id00001390.png" },
{id:"048/171",name:"Manectric",image: "https://asia.pokemon-card.com/id/card-img/id00001391.png" },
{id:"049/171",name:"Shinx",image: "https://asia.pokemon-card.com/id/card-img/id00001392.png" },
{id:"050/171",name:"Luxio",image: "https://asia.pokemon-card.com/id/card-img/id00001393.png" },
{id:"051/171",name:"Luxray",image: "https://asia.pokemon-card.com/id/card-img/id00001394.png" },
{id:"052/171",name:"Natu",image: "https://asia.pokemon-card.com/id/card-img/id00001395.png" },
{id:"053/171",name:"Xatu",image: "https://asia.pokemon-card.com/id/card-img/id00001396.png" },
{id:"054/171",name:"Drowzee",image: "https://asia.pokemon-card.com/id/card-img/id00001397.png" },
{id:"055/171",name:"Hypno",image: "https://asia.pokemon-card.com/id/card-img/id00001398.png" },
{id:"056/171",name:"Misdreavus",image: "https://asia.pokemon-card.com/id/card-img/id00001399.png" },
{id:"057/171",name:"Mismagius",image: "https://asia.pokemon-card.com/id/card-img/id00001400.png" },
{id:"058/171",name:"Chimecho",image: "https://asia.pokemon-card.com/id/card-img/id00001401.png" },
{id:"059/171",name:"Drifloon",image: "https://asia.pokemon-card.com/id/card-img/id00001402.png" },
{id:"060/171",name:"Drifblim",image: "https://asia.pokemon-card.com/id/card-img/id00001403.png" },
{id:"061/171",name:"Honedge",image: "https://asia.pokemon-card.com/id/card-img/id00001404.png" },
{id:"062/171",name:"Doublade",image: "https://asia.pokemon-card.com/id/card-img/id00001405.png" },
{id:"063/171",name:"Aegislash",image: "https://asia.pokemon-card.com/id/card-img/id00001406.png" },
{id:"064/171",name:"Riolu",image: "https://asia.pokemon-card.com/id/card-img/id00001407.png" },
{id:"065/171",name:"Lucario",image: "https://asia.pokemon-card.com/id/card-img/id00001408.png" },
{id:"066/171",name:"Larvitar",image: "https://asia.pokemon-card.com/id/card-img/id00001409.png" },
{id:"067/171",name:"Pupitar",image: "https://asia.pokemon-card.com/id/card-img/id00001410.png" },
{id:"068/171",name:"Tyranitar",image: "https://asia.pokemon-card.com/id/card-img/id00001411.png" },
{id:"069/171",name:"Geodude",image: "https://asia.pokemon-card.com/id/card-img/id00001412.png" },
{id:"070/171",name:"Graveler",image: "https://asia.pokemon-card.com/id/card-img/id00001413.png" },
{id:"071/171",name:"Golem",image: "https://asia.pokemon-card.com/id/card-img/id00001414.png" },
{id:"072/171",name:"Machop",image: "https://asia.pokemon-card.com/id/card-img/id00001415.png" },
{id:"073/171",name:"Machoke",image: "https://asia.pokemon-card.com/id/card-img/id00001416.png" },
{id:"074/171",name:"Machamp",image: "https://asia.pokemon-card.com/id/card-img/id00001417.png" },
{id:"075/171",name:"Phanpy",image: "https://asia.pokemon-card.com/id/card-img/id00001418.png" },
{id:"076/171",name:"Donphan",image: "https://asia.pokemon-card.com/id/card-img/id00001419.png" },
{id:"077/171",name:"Diglett",image: "https://asia.pokemon-card.com/id/card-img/id00001420.png" },
{id:"078/171",name:"Dugtrio",image: "https://asia.pokemon-card.com/id/card-img/id00001421.png" },
{id:"079/171",name:"Onix",image: "https://asia.pokemon-card.com/id/card-img/id00001422.png" },
{id:"080/171",name:"Steelix",image: "https://asia.pokemon-card.com/id/card-img/id00001423.png" },
{id:"081/171",name:"Skarmory",image: "https://asia.pokemon-card.com/id/card-img/id00001424.png" },
{id:"082/171",name:"Aron",image: "https://asia.pokemon-card.com/id/card-img/id00001425.png" },
{id:"083/171",name:"Lairon",image: "https://asia.pokemon-card.com/id/card-img/id00001426.png" },
{id:"084/171",name:"Aggron",image: "https://asia.pokemon-card.com/id/card-img/id00001427.png" },
{id:"085/171",name:"Beldum",image: "https://asia.pokemon-card.com/id/card-img/id00001428.png" },
{id:"086/171",name:"Metang",image: "https://asia.pokemon-card.com/id/card-img/id00001429.png" },
{id:"087/171",name:"Metagross",image: "https://asia.pokemon-card.com/id/card-img/id00001430.png" },
{id:"088/171",name:"Alolan Meowth",image: "https://asia.pokemon-card.com/id/card-img/id00001431.png" },
{id:"089/171",name:"Alolan Persian",image: "https://asia.pokemon-card.com/id/card-img/id00001432.png" },
{id:"090/171",name:"Murkrow",image: "https://asia.pokemon-card.com/id/card-img/id00001433.png" },
{id:"091/171",name:"Honchkrow",image: "https://asia.pokemon-card.com/id/card-img/id00001434.png" },
{id:"092/171",name:"Houndour",image: "https://asia.pokemon-card.com/id/card-img/id00001435.png" },
{id:"093/171",name:"Houndoom",image: "https://asia.pokemon-card.com/id/card-img/id00001436.png" },
{id:"094/171",name:"Stunky",image: "https://asia.pokemon-card.com/id/card-img/id00001437.png" },
{id:"095/171",name:"Skuntank",image: "https://asia.pokemon-card.com/id/card-img/id00001438.png" },
{id:"096/171",name:"Deino",image: "https://asia.pokemon-card.com/id/card-img/id00001439.png" },
{id:"097/171",name:"Zweilous",image: "https://asia.pokemon-card.com/id/card-img/id00001440.png" },
{id:"098/171",name:"Hydreigon",image: "https://asia.pokemon-card.com/id/card-img/id00001441.png" },
{id:"099/171",name:"Dratini",image: "https://asia.pokemon-card.com/id/card-img/id00001442.png" },
{id:"100/171",name:"Dragonair",image: "https://asia.pokemon-card.com/id/card-img/id00001443.png" },
{id:"101/171",name:"Dragonite",image: "https://asia.pokemon-card.com/id/card-img/id00001444.png" },
{id:"102/171",name:"Togepi",image: "https://asia.pokemon-card.com/id/card-img/id00001445.png" },
{id:"103/171",name:"Togetic",image: "https://asia.pokemon-card.com/id/card-img/id00001446.png" },
{id:"104/171",name:"Togekiss",image: "https://asia.pokemon-card.com/id/card-img/id00001447.png" },
{id:"105/171",name:"Cleffa",image: "https://asia.pokemon-card.com/id/card-img/id00001448.png" },
{id:"106/171",name:"Clefairy",image: "https://asia.pokemon-card.com/id/card-img/id00001449.png" },
{id:"107/171",name:"Clefable",image: "https://asia.pokemon-card.com/id/card-img/id00001450.png" },
{id:"108/171",name:"Mime Jr.",image: "https://asia.pokemon-card.com/id/card-img/id00001451.png" },
{id:"109/171",name:"Mr. Mime",image: "https://asia.pokemon-card.com/id/card-img/id00001452.png" },
{id:"110/171",name:"Eevee",image: "https://asia.pokemon-card.com/id/card-img/id00001453.png" },
{id:"111/171",name:"Porygon",image: "https://asia.pokemon-card.com/id/card-img/id00001454.png" },
{id:"112/171",name:"Porygon2",image: "https://asia.pokemon-card.com/id/card-img/id00001455.png" },
{id:"113/171",name:"Porygon-Z",image: "https://asia.pokemon-card.com/id/card-img/id00001456.png" },
{id:"114/171",name:"Snorlax",image: "https://asia.pokemon-card.com/id/card-img/id00001457.png" },
{id:"115/171",name:"Lickitung",image: "https://asia.pokemon-card.com/id/card-img/id00001458.png" },
{id:"116/171",name:"Lickilicky",image: "https://asia.pokemon-card.com/id/card-img/id00001459.png" },
{id:"117/171",name:"Pidgey",image: "https://asia.pokemon-card.com/id/card-img/id00001460.png" },
{id:"118/171",name:"Pidgeotto",image: "https://asia.pokemon-card.com/id/card-img/id00001461.png" },
{id:"119/171",name:"Pidgeot",image: "https://asia.pokemon-card.com/id/card-img/id00001462.png" },
{id:"120/171",name:"Oranguru",image: "https://asia.pokemon-card.com/id/card-img/id00001463.png" },
{id:"121/171",name:"Iwao",image: "https://asia.pokemon-card.com/id/card-img/id00001464.png" },
{id:"122/171",name:"Nene",image: "https://asia.pokemon-card.com/id/card-img/id00001465.png" },
{id:"123/171",name:"Pokémon Fan Club",image: "https://asia.pokemon-card.com/id/card-img/id00001466.png" },
{id:"124/171",name:"Shauna",image: "https://asia.pokemon-card.com/id/card-img/id00001467.png" },
{id:"125/171",name:"Great Ball",image: "https://asia.pokemon-card.com/id/card-img/id00001468.png" },
{id:"126/171",name:"Energy Switch",image: "https://asia.pokemon-card.com/id/card-img/id00001469.png" },
{id:"127/171",name:"Potion",image: "https://asia.pokemon-card.com/id/card-img/id00001470.png" },
{id:"128/171",name:"Scoop Up Cyclone",image: "https://asia.pokemon-card.com/id/card-img/id00001471.png" },
{id:"129/171",name:"Professor's Letter",image: "https://asia.pokemon-card.com/id/card-img/id00001472.png" },
{id:"130/171",name:"Heavy Ball",image: "https://asia.pokemon-card.com/id/card-img/id00001473.png" },
{id:"131/171",name:"Switch",image: "https://asia.pokemon-card.com/id/card-img/id00001474.png" },
{id:"132/171",name:"Ultra Ball",image: "https://asia.pokemon-card.com/id/card-img/id00001475.png" },
{id:"133/171",name:"Lucky Egg",image: "https://asia.pokemon-card.com/id/card-img/id00001476.png" },
{id:"134/171",name:"Muscle Band",image: "https://asia.pokemon-card.com/id/card-img/id00001477.png" },
{id:"135/171",name:"Exp. Share",image: "https://asia.pokemon-card.com/id/card-img/id00001478.png" },
{id:"136/171",name:"Pokémon Catcher",image: "https://asia.pokemon-card.com/id/card-img/id00001479.png" },
{id:"137/171",name:"Energy Recovery",image: "https://asia.pokemon-card.com/id/card-img/id00001480.png" },
{id:"138/171",name:"Enhanced Hammer",image: "https://asia.pokemon-card.com/id/card-img/id00001481.png" },
{id:"139/171",name:"Float Stone",image: "https://asia.pokemon-card.com/id/card-img/id00001482.png" },
{id:"140/171",name:"Basic Grass Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001483.png" },
{id:"141/171",name:"Basic Fire Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001484.png" },
{id:"142/171",name:"Basic Water Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001485.png" },
{id:"143/171",name:"Basic Lightning Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001486.png" },
{id:"144/171",name:"Basic Psychic Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001487.png" },
{id:"145/171",name:"Basic Fighting Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001488.png" },
{id:"146/171",name:"Basic Darkness Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001489.png" },
{id:"147/171",name:"Basic Metal Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001490.png" },
{id:"148/171",name:"Basic Fairy Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001491.png" },
{id:"149/171",name:"Basic Dragon Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001492.png" },
{id:"150/171",name:"Double Colorless Energy",image: "https://asia.pokemon-card.com/id/card-img/id00001493.png" },
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


