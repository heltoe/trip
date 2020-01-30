const btn = document.querySelector('.button-contact')
const input = document.querySelectorAll('.email-input')
const textArea = document.querySelector('.form-text-area')

console.log(textArea)


const addClass = () => {
    let isValid = true
    const fieldes = {
        name: "",
        number: "",
        email: "",
        subject: "",
        message: textArea.value,
    }
    input.forEach(item => {
        const field = item.getAttribute('data-input')
        fieldes[field] = item.value
        if (item.value.length < 3) {
            return item.classList.add('input-invalid')
        }
    })
    console.log(fieldes)
}
const removeClass = (event) => {
    event.target.classList.remove('input-invalid')
}

btn.addEventListener('click', addClass)
    // event.addEventListener('focus', removeClass)

input.forEach(item => {
    item.addEventListener('focus', removeClass)
})