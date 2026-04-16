const navbar = document.querySelector('.navbar');
const tabs = document.querySelectorAll('.tabs button');
const title = document.getElementById('sectionTitle');
const hero = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    title.textContent = tab.textContent;
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    hero.style.opacity = '0';
  } else {
    hero.style.opacity = '1';
  }
});