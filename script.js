let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  
  Array.from(slides).forEach((slide, index) => {
    slide.style.opacity = "0";
    slide.style.transition = "opacity 0.5s ease";
  });
  
  slides[slideIndex].style.opacity = "1"; // Solo el slide actual es totalmente visible
}
