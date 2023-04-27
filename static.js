let slideIndex = 0;

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 2;
  }
  updateSlide();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  updateSlide();
}

function updateSlide() {
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}