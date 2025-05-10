document.addEventListener('DOMContentLoaded', function () {
  // Loading animation
  const loaderWrapper = document.querySelector('.loader-wrapper');
  if (loaderWrapper) {
    // Fade out loader after page is fully loaded
    window.addEventListener('load', function () {
      setTimeout(function () {
        loaderWrapper.classList.add('fade-out');
      }, 500); // Small delay for visual effect
    });
  }

  // Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  if (hamburger && navLinks && navOverlay) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      navOverlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    navOverlay.addEventListener('click', function () {
      navLinks.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll animations
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  // Add animation classes to elements
  document.querySelectorAll('.section-title').forEach(el => {
    el.classList.add('animate-on-scroll');
  });

  document.querySelectorAll('.card').forEach(el => {
    el.classList.add('animate-on-scroll');
  });

  document.querySelectorAll('.content-container').forEach(el => {
    el.classList.add('animate-on-scroll');
  });

  // Add animation to CTA buttons that aren't already animated
  document.querySelectorAll('.invite-btn').forEach(el => {
    if (!el.classList.contains('animate-on-scroll')) {
      el.classList.add('animate-on-scroll');
    }
  });

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  // Function to handle scroll animations
  function handleScrollAnimations() {
    animateElements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('visible');
      }
    });
  }

  // Initial check for elements in viewport
  setTimeout(handleScrollAnimations, 100);

  // Check on scroll
  window.addEventListener('scroll', handleScrollAnimations);

  // Navbar scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Add animation classes to sections
  const sections = document.querySelectorAll('.section');
  sections.forEach((section, index) => {
    if (index % 2 === 0) {
      section.querySelectorAll('.card:nth-child(odd)').forEach(card => {
        card.classList.add('animate-left');
      });
      section.querySelectorAll('.card:nth-child(even)').forEach(card => {
        card.classList.add('animate-right');
      });
    } else {
      section.querySelectorAll('.card:nth-child(odd)').forEach(card => {
        card.classList.add('animate-right');
      });
      section.querySelectorAll('.card:nth-child(even)').forEach(card => {
        card.classList.add('animate-left');
      });
    }
  });
});
