const slides = Array.from(document.querySelectorAll('.slide'));
const slideCounter = document.getElementById('slideCounter');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

let currentSlide = 0;

function updateSlidePosition() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('is-active', index === currentSlide);
  });

  const total = slides.length;
  slideCounter.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}

function goToSlide(nextIndex) {
  currentSlide = (nextIndex + slides.length) % slides.length;
  updateSlidePosition();
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
    event.preventDefault();
    goToSlide(currentSlide + 1);
  }

  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    goToSlide(currentSlide - 1);
  }
});

updateSlidePosition();
