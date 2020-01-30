const images = document.getElementsByClassName('image-g')
const modal = document.querySelector('.modal')
const close = document.querySelector('.modal-close')
const next = document.querySelector('.modal-next')
const prev = document.querySelector('.modal-prev')
const imageModal = document.querySelector('.image-modal')
let currentIndex = 0

const setImage = () => {
    imageModal.style.opacity = "0"
    let clickedPhoto
    if (images[currentIndex].hasAttribute('src')) {
        clickedPhoto = images[currentIndex].getAttribute('src')
    } else {
        clickedPhoto = images[currentIndex].getAttribute('data-image')
    } 
    setTimeout(() => {
        imageModal.style.opacity = "1"
        imageModal.setAttribute ('src', clickedPhoto)
    }, 300)
}

const nextSlide = () => {
    if (currentIndex > images.length - 2) {
        currentIndex = 0
        return setImage()
    }
    currentIndex++
    setImage()
}
const prevSlide = () => {
    if (currentIndex < 1) {
        currentIndex = images.length - 1 
        return setImage()
    }  
    currentIndex-- 
    setImage()
}

const closeModal = () => {
    modal.style.opacity = "0"
    setTimeout(() => {
        modal.style.display = "none"
    }, 300)
}

const openModal = element => {
    let clickedPhoto
    if (element.target.hasAttribute('src')) {
        clickedPhoto = element.target.getAttribute('src')
    } else {
        clickedPhoto = element.target.getAttribute('data-image')
    } 
    for (let key in images) {
        if (images[key] === element.target) {
            currentIndex = key 
        }
    }
    imageModal.setAttribute ('src', clickedPhoto)
    modal.style.opacity = "0"
    modal.style.display = "flex"
    setTimeout(() => { 
        modal.style.opacity = "1" 
    }, 300)
}


close.addEventListener('click', closeModal) 
next.addEventListener('click', nextSlide) 
prev.addEventListener('click', prevSlide)


Object.keys(images).forEach(item => {
    images[item].addEventListener('click', openModal)
})


window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

