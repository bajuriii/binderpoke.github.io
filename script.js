// Simple static data. Tambah kartu di sini.
const cards = [
  {
    id: "001/171",
    name: "Karrablast",
    series: "AS1a",
    type: "Grass",
    rarity: "C",
    image: "https://raw.githubusercontent.com/username/binderpokemon.github.io/main/images/karrablast.jpg"
  },
  {
    id: "002/171",
    name: "Alolan Marowak",
    series: "AS1a",
    type: "Fire",
    rarity: "C",
    image: "https://raw.githubusercontent.com/username/binderpokemon.github.io/main/images/alolan_marowak.jpg"
  },
  {
    id: "003/171",
    name: "Entei GX",
    series: "AS1a",
    type: "Fire",
    rarity: "RR",
    image: "https://raw.githubusercontent.com/username/binderpokemon.github.io/main/images/entei_gx.jpg"
  }
  // Tambah data kartu lain di sini
];

const grid = document.getElementById('grid');
const search = document.getElementById('search');
const filterType = document.getElementById('filterType');
const filterRarity = document.getElementById('filterRarity');

function unique(arr, key){
  return Array.from(new Set(arr.map(x=>x[key]))).filter(Boolean).sort();
}

// populate filters
function initFilters(){
  const types = unique(cards, 'type');
  types.forEach(t=>{
    const o = document.createElement('option');
    o.value = t; o.textContent = t; filterType.appendChild(o);
  });
  const rarities = unique(cards, 'rarity');
  rarities.forEach(r=>{
    const o = document.createElement('option');
    o.value = r; o.textContent = r; filterRarity.appendChild(o);
  });
}

// render card grid
function render(list){
  grid.innerHTML = '';
  if(list.length === 0){
    grid.innerHTML = '<p style="color:var(--muted);grid-column:1/-1;text-align:center">Tidak ada kartu</p>';
    return;
  }
  list.forEach(c=>{
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <img src="${c.image}" alt="${c.name}" loading="lazy">
      <div class="meta">
        <div class="name">${c.name}</div>
        <div class="sub">${c.series} · ${c.type} · ${c.rarity}</div>
      </div>
    `;
    el.addEventListener('click', ()=> openDetail(c));
    grid.appendChild(el);
  });
}

// filtering logic
function applyFilters(){
  const q = search.value.trim().toLowerCase();
  const type = filterType.value;
  const rarity = filterRarity.value;
  let result = cards.filter(c=>{
    const matchQ = q === '' || (c.name + ' ' + c.series + ' ' + c.id).toLowerCase().includes(q);
    const matchType = !type || c.type === type;
    const matchRarity = !rarity || c.rarity === rarity;
    return matchQ && matchType && matchRarity;
  });
  render(result);
}

// detail popup
const overlay = document.getElementById('overlay');
const detailImage = document.getElementById('detailImage');
const detailName = document.getElementById('detailName');
const detailSeries = document.getElementById('detailSeries');
const detailType = document.getElementById('detailType');
const detailRarity = document.getElementById('detailRarity');
const closeBtn = document.getElementById('closeDetail');

function openDetail(card){
  detailImage.src = card.image;
  detailName.textContent = `${card.name} (${card.id})`;
  detailSeries.textContent = card.series;
  detailType.textContent = card.type;
  detailRarity.textContent = card.rarity;
  overlay.classList.remove('hidden');
}
function closeDetail(){ overlay.classList.add('hidden'); }
closeBtn.addEventListener('click', closeDetail);
overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeDetail(); });

search.addEventListener('input', applyFilters);
filterType.addEventListener('change', applyFilters);
filterRarity.addEventListener('change', applyFilters);

// init
initFilters();
applyFilters();
