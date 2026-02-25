/* ============================================
   NAVIGATION & INTERACTIVITY
   ============================================ */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
  }

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add scroll animation for cards (fade in as you scroll)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Optional: observe cards for animation
document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0.8';
  observer.observe(card);
});
