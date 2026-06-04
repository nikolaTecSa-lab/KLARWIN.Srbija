// ===== MOBILE MENU =====
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const burger = document.querySelector('.burger');
  if (menu && burger && !menu.contains(e.target) && !burger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(10, 12, 15, 0.97)';
    navbar.style.borderBottomColor = 'rgba(255,255,255,0.1)';
  } else {
    navbar.style.background = 'rgba(10, 12, 15, 0.85)';
    navbar.style.borderBottomColor = 'rgba(255,255,255,0.07)';
  }
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', function() {
  const targets = document.querySelectorAll(
    '.service-card, .mini-card, .module-card, .ref-card, .price-row, .stat, .hex'
  );
  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    revealObserver.observe(el);
  });
});

// ===== SMOOTH ANCHOR SCROLL =====
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
