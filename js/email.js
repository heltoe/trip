const button = document.querySelector('.email-button')
const inputemail = document.querySelector('.input-subscribe')

const subscribe = () => {
    if (inputemail.value.length < 4) {
        return inputemail.classList.add('input-invalid')
    }
    console.log(inputemail.value)
}
const removeSubscribeClass = (event) => {
    event.target.classList.remove('input-invalid')
}

button.addEventListener('click', subscribe)
inputemail.addEventListener('focus' , removeSubscribeClass)
