

const logo = document.querySelector('.logo');
const body = document.body;


if (localStorage.getItem('mode') === 'light') {
  body.classList.add('light-mode');
} else {
  body.classList.remove('light-mode');
}

logo.addEventListener('click', () => {
    body.classList.toggle('light-mode');

  
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('mode', 'light');
  } else {
    localStorage.setItem('mode', 'dark');
  }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.content-slide');
const slideDuration = 5000;  // 10 seconds

function showNextSlide() {
  slides[currentSlide].classList.remove('active');  
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');  
}

// Change slide every 10 seconds
setInterval(showNextSlide, slideDuration);  




// Toggle menu visibility and icon change on clicking the hamburger button
document.querySelector('.menu-btn').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active'); // Toggle the active class on the menu
});
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.remove('active');
  document.querySelector('.menu-btn i').classList.remove('active');
});

document.querySelectorAll('.nav-links li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
         e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
      });
      document.querySelector('.nav-links').classList.remove('active');
      document.querySelector('.menu-btn i').classList.remove('active');
  });
});