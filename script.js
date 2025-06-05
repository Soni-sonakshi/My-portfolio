var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function() {
  ScrollReveal().reveal('.about', {
    delay: 200,
    distance: '60px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.services', {
    delay: 300,
    distance: '60px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('#skills-section', {
    delay: 400,
    distance: '60px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('#projects', {
    delay: 500,
    distance: '60px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('#contact', {
    delay: 600,
    distance: '60px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    reset: true
  });
});


