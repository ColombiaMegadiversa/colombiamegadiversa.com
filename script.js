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


//botones leer mas proyectos//
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  
  Array.from(slides).forEach((slide, index) => {
    slide.style.opacity = "0";
    slide.style.pointerEvents = "none"; // Asegura que los slides no visibles no sean interactuables
    slide.style.transition = "opacity 0.5s ease";
  });
  
  slides[slideIndex].style.opacity = "1";
  slides[slideIndex].style.pointerEvents = "auto"; // Asegura que el slide actual sea interactuable
}
