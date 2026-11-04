// Lógica del Carrusel Dinámico
let slideIndex = 0;
let autoSlideInterval;

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  startAutoSlide();
});

function showSlides(index) {
  const slides = document.getElementsByClassName("carousel-slide");
  const dots = document.getElementsByClassName("dot");

  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

function moveSlide(step) {
  resetAutoSlide();
  showSlides(slideIndex += step);
}

function currentSlide(index) {
  resetAutoSlide();
  showSlides(slideIndex = index);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 4000); // Cambia cada 4 segundos
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}