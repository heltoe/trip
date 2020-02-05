const button = document.querySelector('.email-button')
const inputemail = document.querySelector('.input-subscribe')
const feedback = document.querySelector('.feedback')


const subscribe = async () => {
  try {
    if (inputemail.value.length < 4) {
      return inputemail.classList.add('input-invalid')
    }
    button.setAttribute('disabled', 'disabled')
    feedback.classList.remove('feedback-success')
    feedback.classList.remove('feedback-error')
    const responce = await fetch('http://localhost:3000/api/subscribe', {
      method: 'POST' , 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({ email: '' })
    })
    console.log(responce)
    feedback.innerHTML = 'Заявка успешно отправлена'
    feedback.classList.add('feedback-success')
  } catch(error) {
    console.log(error)
    feedback.innerHTML = 'Сервис временно не работает'
    feedback.classList.add('feedback-error')
  } finally {
    console.log(11111)
    button.removeAttribute('disabled')
  }
}
const removeSubscribeClass = (event) => {
  event.target.classList.remove('input-invalid')
}

button.addEventListener('click', subscribe)
inputemail.addEventListener('focus' , removeSubscribeClass)


