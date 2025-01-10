

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
  slides[currentSlide].classList.remove('active');  // Hide the current slide
  currentSlide = (currentSlide + 1) % slides.length;  // Move to the next slide
  slides[currentSlide].classList.add('active');  // Show the next slide
}

// Change slide every 10 seconds
setInterval(showNextSlide, slideDuration);  // Change slide every 10 seconds

 