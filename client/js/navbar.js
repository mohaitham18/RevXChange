const navbar = document.querySelector('.navbar');

// ─── Navbar Scroll ────────────────────────────────────────────
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});



// ─── Tab Click Handler ────────────────────────────────────────
tabButtons.forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('active')) return;
    tabButtons.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    title.textContent = tab.textContent;
    switchTab(tab.textContent.trim());
  });
});

// ─── Nav Indicator ────────────────────────────────────────────
const navIndicator   = document.getElementById('navIndicator');
const navLinksList   = document.querySelector('.nav-links');
const navLinkAnchors = document.querySelectorAll('.nav-links a');

function moveIndicator(anchor) {
  const listRect   = navLinksList.getBoundingClientRect();
  const linkRect   = anchor.getBoundingClientRect();
  navIndicator.style.left    = (linkRect.left - listRect.left) + 'px';
  navIndicator.style.width   = linkRect.width + 'px';
  navIndicator.style.opacity = '1';
}

navLinkAnchors.forEach(anchor => {
  anchor.addEventListener('mouseenter', () => moveIndicator(anchor));
});

navLinksList.addEventListener('mouseleave', () => {
  navIndicator.style.opacity = '0';
});



// ─── Hero Fade ────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const opacity = Math.max(0, 1 - scroll / 400);
  hero.style.opacity = opacity;
});
