
const tabButtons = document.querySelectorAll('.tabs button');
const title      = document.getElementById('sectionTitle');
const hero       = document.querySelector('.hero-bg');
const grid       = document.querySelector('.brands-grid');
const isLoggedIn = false;

const popularSearches = [
  'Toyota Corolla 2022', 'BMW 320i', 'Kia Sportage', 'Mercedes C200',
  'Hyundai Elantra', 'Under 200K', 'Cairo', 'Automatic', 'SUV',
  'Nissan Sunny', 'Chevrolet Cruze', 'Low Mileage', 'First Owner',
];

// mostViewedCars and brandImages are loaded from cars.js (included before this script)

// ─── Tab Data ────────────────────────────────────────────────
const tabData = {
  'Top Brands': [
    { name: 'Mercedes',   count: '1,304', img: 'assets/images/mercedes.png' },
    { name: 'Kia',        count: '882',   img: 'assets/images/kia.png' },
    { name: 'Hyundai',    count: '882',   img: 'assets/images/hyundai.png' },
    { name: 'Chevrolet',  count: '581',   img: 'assets/images/chevrolet.png' },
    { name: 'BMW',        count: '576',   img: 'assets/images/bmw.png' },
    { name: 'Nissan',     count: '544',   img: 'assets/images/nissan.png' },
    { name: 'Peugeot',    count: '408',   img: 'assets/images/peugeot.png' },
    { name: 'Fiat',       count: '433',   img: 'assets/images/fiat.png' },
    { name: 'Chery',      count: '391',   img: 'assets/images/chery.png' },
    { name: 'Skoda',      count: '367',   img: 'assets/images/skoda.png' },
    { name: 'Toyota',     count: '333',   img: 'assets/images/toyota.png' },
    { name: 'Volkswagen', count: '333',   img: 'assets/images/volkswagen.png' },
    { name: 'MG',         count: '323',   img: 'assets/images/mg.png' },
    { name: 'Renault',    count: '588',   img: 'assets/images/renault.png' },
    { name: 'Opel',       count: '433',   img: 'assets/images/opel.png' },
    { name: 'Honda',      count: '298',   img: 'assets/images/honda.png' },
  ],

  'Top Models': [
    { name: 'C-Class',   count: '540',   brand: 'Mercedes' },
    { name: 'Corolla',   count: '480',   brand: 'Toyota' },
    { name: 'Elantra',   count: '410',   brand: 'Hyundai' },
    { name: 'Sportage',  count: '380',   brand: 'Kia' },
    { name: 'Sunny',     count: '310',   brand: 'Nissan' },
    { name: 'Cruze',     count: '290',   brand: 'Chevrolet' },
    { name: '320i',      count: '240',   brand: 'BMW' },
    { name: 'Passat',    count: '190',   brand: 'VW' },
    { name: 'Clio',      count: '370',   brand: 'Renault' },
    { name: 'Tiggo 7',   count: '260',   brand: 'Chery' },
    { name: 'Octavia',   count: '200',   brand: 'Skoda' },
    { name: 'Astra',     count: '175',   brand: 'Opel' },
    { name: 'RX5',       count: '310',   brand: 'MG' },
    { name: 'Tipo',      count: '220',   brand: 'Fiat' },
    { name: '208',       count: '195',   brand: 'Peugeot' },
    { name: 'Civic',     count: '165',   brand: 'Honda' },
  ],

  'Top Cities': [
    { name: 'Cairo',        count: '4,210', icon: '🏙️' },
    { name: 'Alexandria',   count: '1,830', icon: '🌊' },
    { name: 'Giza',         count: '1,540', icon: '🏛️' },
    { name: 'Mansoura',     count: '620',   icon: '🏘️' },
    { name: 'Tanta',        count: '480',   icon: '🏡' },
    { name: 'Suez',         count: '340',   icon: '⚓' },
    { name: 'Ismailia',     count: '290',   icon: '🌿' },
    { name: 'Aswan',        count: '210',   icon: '☀️' },
    { name: 'Luxor',        count: '190',   icon: '🗿' },
    { name: 'Hurghada',     count: '175',   icon: '🏖️' },
    { name: 'Port Said',    count: '310',   icon: '🚢' },
    { name: 'Zagazig',      count: '260',   icon: '🏗️' },
    { name: 'Fayyum',       count: '150',   icon: '🌾' },
    { name: 'Minya',        count: '130',   icon: '🏞️' },
    { name: 'Sohag',        count: '110',   icon: '🌄' },
    { name: 'Damanhur',     count: '95',    icon: '🏠' },
  ],

  'Price Ranges': [
    { name: 'Under 100K',   count: '920',   label: '< 100K' },
    { name: '100K – 200K',  count: '1,540', label: '100–200K' },
    { name: '200K – 300K',  count: '1,830', label: '200–300K' },
    { name: '300K – 400K',  count: '1,100', label: '300–400K' },
    { name: '400K – 500K',  count: '740',   label: '400–500K' },
    { name: '500K – 600K',  count: '530',   label: '500–600K' },
    { name: '600K – 800K',  count: '410',   label: '600–800K' },
    { name: '800K – 1M',    count: '280',   label: '800K–1M' },
    { name: '1M – 1.2M',    count: '220',   label: '1–1.2M' },
    { name: '1.2M – 1.5M',  count: '175',   label: '1.2–1.5M' },
    { name: '1.5M – 2M',    count: '130',   label: '1.5–2M' },
    { name: '2M – 3M',      count: '90',    label: '2–3M' },
    { name: '3M – 5M',      count: '55',    label: '3–5M' },
    { name: '5M – 7M',      count: '30',    label: '5–7M' },
    { name: '7M – 10M',     count: '18',    label: '7–10M' },
    { name: 'Above 10M',    count: '9',     label: '10M+' },
  ],
};

// ─── Render Grid ─────────────────────────────────────────────
function renderGrid(tabName) {
  const items = tabData[tabName] || [];

  grid.innerHTML = items.map(item => {
    if (item.img) {
      // Brand card
      return `
        <div class="brand-card">
          <img src="${item.img}" alt="${item.name}">
          <h4>${item.name}</h4>
          <span>(${item.count})</span>
        </div>`;
    } else if (item.brand) {
      // Model card
      return `
        <div class="brand-card model-card">
          <div class="card-model-name">${item.name}</div>
          <h4>${item.name}</h4>
          <span>(${item.count})</span>
        </div>`;
    } else if (item.icon) {
      // City card
      return `
        <div class="brand-card city-card">
          <div class="card-icon">${item.icon}</div>
          <h4>${item.name}</h4>
          <span>(${item.count})</span>
        </div>`;
    } else {
      // Price card
      return `
        <div class="brand-card price-card">
          <div class="card-price-badge">EGP<br>${item.label}</div>
          <h4>${item.name}</h4>
          <span>(${item.count})</span>
        </div>`;
    }
  }).join('');
}

function renderChip(label) {
  return `<button class="search-chip">${label}</button>`;
}

// ─── Animated Tab Switch ──────────────────────────────────────
function switchTab(tabName) {
  grid.classList.add('tab-exit');

  setTimeout(() => {
    renderGrid(tabName);
    grid.classList.remove('tab-exit');
    grid.classList.add('tab-enter');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        grid.classList.replace('tab-enter', 'tab-enter-active');
        setTimeout(() => grid.classList.remove('tab-enter-active'), 250);
      });
    });
  }, 150);
}


//Render: Discover Section
function renderDiscover() {
  const el = document.getElementById('discoverSection');
  if (!el) return;

  if (!isLoggedIn) {
    el.innerHTML = `
      <div class="discover-grid">

        <div class="discover-panel">
          <h3 class="discover-panel-title">Popular Searches</h3>
          <div class="search-chips">
            ${popularSearches.map(renderChip).join('')}
          </div>
        </div>

        <div class="discover-panel">
          <h3 class="discover-panel-title">Most Viewed Cars</h3>
          <div class="car-cards-grid">
            ${mostViewedCars.slice(0, 6).map(renderCarCard).join('')}
          </div>
        </div>

      </div>`;
  } else {
    el.innerHTML = `
      <div class="discover-grid">

        <div class="discover-panel">
          <h3 class="discover-panel-title">Saved Searches</h3>
          <div class="discover-empty">
            <span>🔍</span>
            No saved searches yet.
          </div>
        </div>

        <div class="discover-panel">
          <h3 class="discover-panel-title">Saved Ads</h3>
          <div class="discover-empty">
            <span>🚗</span>
            No saved ads yet.
          </div>
        </div>

      </div>`;
  }
}

// ─── Init ─────────────────────────────────────────────────────
renderGrid('Top Brands');
renderDiscover();