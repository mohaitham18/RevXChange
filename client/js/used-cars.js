const usedCarsGrid = document.getElementById('usedCarsGrid');
const resultsCount = document.getElementById('resultsCount');

const brandFilter = document.getElementById('brandFilter');
const cityFilter = document.getElementById('cityFilter');
const transmissionFilter = document.getElementById('transmissionFilter');
const maxPriceFilter = document.getElementById('maxPriceFilter');
const fabrikaFilter = document.getElementById('fabrikaFilter');
const sortSelect = document.getElementById('sortSelect');


const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');

function populateFilters() {
  const brands = [...new Set(mostViewedCars.map(car => car.brand))];
  const cities = [...new Set(mostViewedCars.map(car => car.city))];

  brands.forEach(brand => {
    brandFilter.innerHTML += `<option value="${brand}">${brand}</option>`;
  });

  cities.forEach(city => {
    cityFilter.innerHTML += `<option value="${city}">${city}</option>`;
  });
}

function getFilteredCars() {
  let cars = [...mostViewedCars];

  if (brandFilter.value) {
    cars = cars.filter(car => car.brand === brandFilter.value);
  }

  if (cityFilter.value) {
    cars = cars.filter(car => car.city === cityFilter.value);
  }

  if (transmissionFilter.value) {
    cars = cars.filter(car => car.transmission === transmissionFilter.value);
  }

  if (maxPriceFilter.value) {
    cars = cars.filter(car => car.price <= Number(maxPriceFilter.value));
  }

  if (fabrikaFilter.checked) {
    cars = cars.filter(car => car.fabrika);
  }

  switch (sortSelect.value) {
    case 'price-low':
      cars.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      cars.sort((a, b) => b.price - a.price);
      break;
    case 'year-new':
      cars.sort((a, b) => b.year - a.year);
      break;
    case 'mileage-low':
      cars.sort((a, b) => a.mileage - b.mileage);
      break;
    default:
      break;
  }

  return cars;
}

// ─── Hero Fade ────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const opacity = Math.max(0, 1 - scroll / 400);
  hero.style.opacity = opacity;
});

function renderUsedCars() {
  const cars = getFilteredCars();
  resultsCount.textContent = `${cars.length} Cars Found`;

  if (!cars.length) {
    usedCarsGrid.innerHTML = `
      <div class="no-results">
        <span>🚗</span>
        No cars match your filters.
      </div>
    `;
    return;
  }

  usedCarsGrid.innerHTML = cars.map(renderCarCard).join('');
}

applyFiltersBtn.addEventListener('click', renderUsedCars);
sortSelect.addEventListener('change', renderUsedCars);

resetFiltersBtn.addEventListener('click', () => {
  brandFilter.value = '';
  cityFilter.value = '';
  transmissionFilter.value = '';
  maxPriceFilter.value = '';
  fabrikaFilter.checked = false;
  sortSelect.value = 'default';
  renderUsedCars();
});

populateFilters();
renderUsedCars();