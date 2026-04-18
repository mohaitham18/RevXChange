// ─── Brand Image Map ──────────────────────────────────────────
const brandImages = {
  Mercedes:   'assets/images/mercedes.png',
  BMW:        'assets/images/BMW.png',
  Kia:        'assets/images/kia.png',
  Toyota:     'assets/images/toyota.png',
  Hyundai:    'assets/images/hyundai.png',
  Nissan:     'assets/images/nissan.png',
  Chevrolet:  'assets/images/chevrolet.png',
  Fiat:       'assets/images/fiat.png',
  Chery:      'assets/images/chery.png',
  Skoda:      'assets/images/skoda.png',
  Volkswagen: 'assets/images/volkswagen.png',
  MG:         'assets/images/mg.png',
  Renault:    'assets/images/renault.png',
  Opel:       'assets/images/opel.png',
  Honda:      'assets/images/honda.png',
  Peugeot:    'assets/images/peugeot.png',
};


// ─── Car Listings Data ────────────────────────────────────────
// fabrika: true  → shows "Fabrika" tag on the card
// fabrika: false → tag is hidden
// phone: seller's phone number (used for WhatsApp & Call buttons)
const mostViewedCars = [
  {
    id: 1,
    brand:        'Mercedes',
    model:        'C200',
    year:         2021,
    price:        1850000,
    mileage:      42000,
    city:         'Cairo',
    transmission: 'Automatic',
    fuel:         'Petrol',
    fabrika:      true,
    phone:        '201000000001',
    images: [
      'assets/images/mercedes.png',
      'assets/images/BMW.png',
      'assets/images/kia.png',
    ],
  },
  {
    id: 2,
    brand:        'BMW',
    model:        '320i',
    year:         2020,
    price:        1650000,
    mileage:      38000,
    city:         'Giza',
    transmission: 'Automatic',
    fuel:         'Petrol',
    fabrika:      false,
    phone:        '201000000002',
    images: [
      'assets/images/BMW.png',
    ],
  },
  {
    id: 3,
    brand:        'Kia',
    model:        'Sportage',
    year:         2022,
    price:        980000,
    mileage:      21000,
    city:         'Alexandria',
    transmission: 'Automatic',
    fuel:         'Petrol',
    fabrika:      true,
    phone:        '201000000003',
    images: [
      'assets/images/kia.png',
      'assets/images/hyundai.png',
    ],
  },
  {
    id: 4,
    brand:        'Toyota',
    model:        'Corolla',
    year:         2023,
    price:        740000,
    mileage:      15000,
    city:         'Cairo',
    transmission: 'Automatic',
    fuel:         'Petrol',
    fabrika:      false,
    phone:        '201000000004',
    images: [
      'assets/images/toyota.png',
    ],
  },
  {
    id: 5,
    brand:        'Hyundai',
    model:        'Elantra',
    year:         2022,
    price:        620000,
    mileage:      28000,
    city:         'Tanta',
    transmission: 'Automatic',
    fuel:         'Petrol',
    fabrika:      false,
    phone:        '201000000005',
    images: [
      'assets/images/hyundai.png',
      'assets/images/nissan.png',
    ],
  },
  {
    id: 6,
    brand:        'Nissan',
    model:        'Sunny',
    year:         2021,
    price:        410000,
    mileage:      55000,
    city:         'Suez',
    transmission: 'Manual',
    fuel:         'Petrol',
    fabrika:      true,
    phone:        '201000000006',
    images: [
      'assets/images/nissan.png',
    ],
  },
  {
    id: 7,
    brand:        'Chevrolet',
    model:        'Cruze',
    year:         2020,
    price:        390000,
    mileage:      61000,
    city:         'Cairo',
    transmission: 'Automatic',
    fuel:         'Petrol',
    fabrika:      false,
    phone:        '201000000007',
    images: [
      'assets/images/chevrolet.png',
      'assets/images/opel.png',
      'assets/images/renault.png',
    ],
  },
  {
    id: 8,
    brand:        'Renault',
    model:        'Clio',
    year:         2022,
    price:        310000,
    mileage:      18000,
    city:         'Mansoura',
    transmission: 'Manual',
    fuel:         'Petrol',
    fabrika:      false,
    phone:        '201000000008',
    images: [
      'assets/images/renault.png',
    ],
  },
  {
    id: 9,
    brand:        'MG',
    model:        'RX5',
    year:         2023,
    price:        870000,
    mileage:      9000,
    city:         'Cairo',
    transmission: 'Automatic',
    fuel:         'Petrol',
    fabrika:      true,
    phone:        '201000000009',
    images: [
      'assets/images/mg.png',
      'assets/images/skoda.png',
    ],
  },
  {
    id: 10,
    brand:        'Honda',
    model:        'Civic',
    year:         2021,
    price:        720000,
    mileage:      33000,
    city:         'Alexandria',
    transmission: 'Automatic',
    fuel:         'Petrol',
    fabrika:      false,
    phone:        '201000000010',
    images: [
      'assets/images/honda.png',
    ],
  },
  {
    id: 11,
    brand:        'Skoda',
    model:        'Octavia',
    year:         2022,
    price:        980000,
    mileage:      22000,
    city:         'Giza',
    transmission: 'Automatic',
    fuel:         'Petrol',
    fabrika:      false,
    phone:        '201000000011',
    images: [
      'assets/images/skoda.png',
      'assets/images/volkswagen.png',
    ],
  },
  {
    id: 12,
    brand:        'Fiat',
    model:        'Tipo',
    year:         2021,
    price:        290000,
    mileage:      44000,
    city:         'Cairo',
    transmission: 'Manual',
    fuel:         'Petrol',
    fabrika:      true,
    phone:        '201000000012',
    images: [
      'assets/images/fiat.png',
    ],
  },
];

/* Discover Section*/
// ─── Helper Formatters ────────────────────────────────────────
function formatPrice(price) {
  return price.toLocaleString() + ' EGP';
}

function formatMileage(mileage) {
  return mileage.toLocaleString() + ' km';
}

// ─── Render: Car Card ─────────────────────────────────────────
function renderCarCard(car) {
  const imgSrc = brandImages[car.brand] || '';
  const imgContent = imgSrc
    ? `<img src="${imgSrc}" alt="${car.brand}" class="car-card-brand-img">`
    : `<span class="car-card-fallback">🚗</span>`;

  const fabrikaTag = car.fabrika
    ? `<span class="car-tag car-tag-fabrika">Fabrika</span>`
    : '';

  return `
    <div class="car-card-placeholder" data-id="${car.id}">
      <div class="car-card-img">
        ${imgContent}
      </div>
      <div class="car-card-info">
        <h4>${car.brand} ${car.model} ${car.year}</h4>
        <div class="car-price">${formatPrice(car.price)}</div>
        <div class="car-meta">
          <span>📍 ${car.city}</span>
          <span>🛣️ ${formatMileage(car.mileage)}</span>
        </div>
        <div class="car-tags">
          <span class="car-tag">${car.transmission}</span>
          <span class="car-tag">${car.fuel}</span>
          ${fabrikaTag}
        </div>
        <div class="car-card-actions">
          <a href="https://wa.me/${car.phone}" target="_blank" class="car-action-btn car-action-whatsapp">
            <svg viewBox="0 0 24 24" fill="currentColor" class="car-action-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.84L0 24l6.335-1.48A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.722.869.936-3.62-.235-.372A9.797 9.797 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
            WhatsApp
          </a>
          <a href="tel:+${car.phone}" class="car-action-btn car-action-call">
            <svg viewBox="0 0 24 24" fill="currentColor" class="car-action-icon"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C9.61 22 2 14.39 2 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.01l-2.2 2.21z"/></svg>
            Call
          </a>
        </div>
      </div>
    </div>`;
}