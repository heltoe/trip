const next = document.getElementById('next')
const prev = document.getElementById('prev')
const slides = document.querySelector(".wrapper_slides")
const maxslides = 3
let slideIndex = 0

function nextSlide() {
    slideIndex++ 
    if (slideIndex === maxslides) {
      next.classList.add('hide')
    }
    if (slideIndex > maxslides) {
      return slideIndex = maxslides
    }
    prev.classList.remove('hide')
    slides.style.transform = `translateX(${-100 * slideIndex}vw)`
}

function prevSlide() {
    slideIndex-- 
    if (slideIndex <= 0) {
      prev.classList.add('hide')
    }
    if (slideIndex < 0) {
      return slideIndex = 0 
    }
    next.classList.remove('hide')
    slides.style.transform = `translateX(${-100 * slideIndex}vw)`
}
prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)
