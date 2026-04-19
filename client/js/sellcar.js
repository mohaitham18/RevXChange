document.addEventListener('DOMContentLoaded', () => {

    // ── State ──────────────────────────────────────────────────
    let images = [];
    let carouselIndex = 0;

    // ── Contact profile info ───────────────────────────────────
    const contactProfileInfo = document.getElementById('contactProfileInfo');
    const rxUser  = localStorage.getItem('rxUser');
    const rxEmail = localStorage.getItem('rxEmail');

    if (contactProfileInfo) {
        if (rxUser) {
            contactProfileInfo.innerHTML = `
                <div class="sell-contact-avatar">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                </div>
                <div class="sell-contact-details">
                    <div class="sell-contact-name">${rxUser}</div>
                    ${rxEmail ? `<div class="sell-contact-email">${rxEmail}</div>` : '<div class="sell-contact-email">No email saved</div>'}
                </div>
            `;
        } else {
            contactProfileInfo.innerHTML = `
                <div class="sell-contact-details">
                    <span class="sell-contact-guest">
                        You're not logged in. <a href="login.html">Login</a> to auto-fill your details.
                    </span>
                </div>
            `;
        }
    }

    // ── DOM refs ───────────────────────────────────────────────
    const carInfo      = document.getElementById('carInfo');
    const kmsDriven    = document.getElementById('kmsDriven');
    const carPrice     = document.getElementById('carPrice');
    const citySelect   = document.getElementById('citySelect');
    const carDesc      = document.getElementById('carDesc');
    const imgInput     = document.getElementById('imgInput');
    const imgThumbs    = document.getElementById('imgThumbs');
    const uploadZone   = document.getElementById('uploadZone');

    // Preview refs
    const previewTitle        = document.getElementById('previewTitle');
    const previewPrice        = document.getElementById('previewPrice');
    const previewCity         = document.getElementById('previewCity');
    const previewKm           = document.getElementById('previewKm');
    const previewTransmission = document.getElementById('previewTransmission');
    const previewFuel         = document.getElementById('previewFuel');
    const previewFabrika      = document.getElementById('previewFabrika');
    const previewPlaceholder  = document.getElementById('previewPlaceholder');
    const sellCarousel        = document.getElementById('sellCarousel');
    const carouselTrack       = document.getElementById('carouselTrack');
    const carouselCounter     = document.getElementById('carouselCounter');
    const carouselPrev        = document.getElementById('carouselPrev');
    const carouselNext        = document.getElementById('carouselNext');

    // Active values
    let activeTransmission = 'Automatic';
    let activeFuel         = 'Gas';
    let activeFabrika      = 'no';
    let activeCondition    = 'Used';

    // ── Live preview updater ───────────────────────────────────
    function updatePreview() {
        const title = carInfo?.value.trim() || 'Your Car Title';
        previewTitle.textContent = title;

        const price = carPrice?.value.trim();
        previewPrice.textContent = price
            ? parseInt(price).toLocaleString('en-EG') + ' EGP'
            : 'Price not set';

        const city = citySelect?.value || '—';
        previewCity.textContent = '📍 ' + city;

        const km = kmsDriven?.value.trim();
        previewKm.textContent = km
            ? '🛣️ ' + parseInt(km).toLocaleString() + ' km'
            : '🛣️ — km';

        previewTransmission.textContent = activeTransmission;
        previewFuel.textContent = activeFuel;
        previewFabrika.style.display = activeFabrika === 'yes' ? 'inline-flex' : 'none';
    }

    // ── Input listeners ────────────────────────────────────────
    [carInfo, kmsDriven, carPrice, citySelect].forEach(el => {
        el?.addEventListener('input', updatePreview);
        el?.addEventListener('change', updatePreview);
    });

    // ── Chip groups ────────────────────────────────────────────
    function initChips(containerId, onSelect) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.querySelectorAll('.sell-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                container.querySelectorAll('.sell-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                onSelect(chip.dataset.val);
                updatePreview();
            });
        });
    }

    initChips('fuelChips', val => activeFuel = val);
    initChips('transmissionChips', val => activeTransmission = val);
    initChips('fabrikaChips', val => activeFabrika = val);

    // ── Toggle (Condition) ─────────────────────────────────────
    const conditionToggle = document.getElementById('conditionToggle');
    conditionToggle?.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            conditionToggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCondition = btn.dataset.val;
        });
    });

    // ── Color picker ───────────────────────────────────────────
    document.querySelectorAll('.sell-color-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.sell-color-item').forEach(c => c.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // ── Image upload ───────────────────────────────────────────
    uploadZone?.addEventListener('click', () => imgInput?.click());

    uploadZone?.addEventListener('dragover', e => {
        e.preventDefault();
        uploadZone.style.borderColor = 'var(--primary)';
    });

    uploadZone?.addEventListener('dragleave', () => {
        uploadZone.style.borderColor = '';
    });

    uploadZone?.addEventListener('drop', e => {
        e.preventDefault();
        uploadZone.style.borderColor = '';
        handleFiles(Array.from(e.dataTransfer.files));
    });

    imgInput?.addEventListener('change', () => {
        handleFiles(Array.from(imgInput.files));
        imgInput.value = '';
    });

    function handleFiles(files) {
        files.forEach(file => {
            if (!file.type.startsWith('image/')) return;
            if (images.length >= 20) return;
            const url = URL.createObjectURL(file);
            images.push(url);
        });
        renderThumbs();
        renderCarousel();
    }

    function renderThumbs() {
        imgThumbs.innerHTML = images.map((url, i) => `
            <div class="sell-thumb ${i === 0 ? 'cover' : ''}">
                <img src="${url}" alt="Car image ${i+1}">
                ${i === 0 ? '<span class="sell-thumb-cover-badge">Cover</span>' : ''}
                <button class="sell-thumb-remove" data-index="${i}">✕</button>
            </div>
        `).join('');

        imgThumbs.querySelectorAll('.sell-thumb-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                images.splice(parseInt(btn.dataset.index), 1);
                if (carouselIndex >= images.length) carouselIndex = Math.max(0, images.length - 1);
                renderThumbs();
                renderCarousel();
            });
        });
    }

    function renderCarousel() {
        if (images.length === 0) {
            previewPlaceholder.style.display = 'flex';
            sellCarousel.style.display = 'none';
            return;
        }

        previewPlaceholder.style.display = 'none';
        sellCarousel.style.display = 'block';

        carouselTrack.innerHTML = images.map((url, i) => `
            <div class="sell-carousel-slide ${i === carouselIndex ? 'active' : ''}">
                <img src="${url}" alt="Slide ${i+1}">
            </div>
        `).join('');

        carouselCounter.textContent = `${carouselIndex + 1} / ${images.length}`;
        carouselPrev.style.display = images.length > 1 ? 'flex' : 'none';
        carouselNext.style.display = images.length > 1 ? 'flex' : 'none';
    }

    carouselPrev?.addEventListener('click', () => {
        carouselIndex = (carouselIndex - 1 + images.length) % images.length;
        renderCarousel();
    });

    carouselNext?.addEventListener('click', () => {
        carouselIndex = (carouselIndex + 1) % images.length;
        renderCarousel();
    });

    // ── Submit ─────────────────────────────────────────────────
    document.getElementById('sellSubmitBtn')?.addEventListener('click', () => {
        const title = carInfo?.value.trim();
        const price = carPrice?.value.trim();
        const phone = document.getElementById('phoneNumber')?.value.trim();

        if (!title || !price || !phone) {
            alert('Please fill in the car details, price, and phone number.');
            return;
        }

        alert('Your ad has been posted successfully!');
    });

    // ── Init preview ───────────────────────────────────────────
    updatePreview();

});