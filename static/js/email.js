const button = document.querySelector('.email-button')
const inputemail = document.querySelector('.input-subscribe')
const feedback = document.querySelector('.feedback')


const subscribe = async () => {
  try {
    if (inputemail.value.length < 4) {
      return inputemail.classList.add('input-invalid')
    }
    button.disabled = true
    feedback.classList.remove('feedback-success')
    feedback.classList.remove('feedback-error')
    const response = await fetch('http://localhost:3001/api/subscribe', {
      method: 'POST' , 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({ email: inputemail.value })
    })
    if (response.status === 404) throw new Error('Сервис временно не работает')
    feedback.innerHTML = 'Заявка успешно отправлена'
    feedback.classList.add('feedback-success')
  } catch(error) {
    console.log(error)
    feedback.innerHTML = 'Сервис временно не работает'
    feedback.classList.add('feedback-error')
  } finally {
    button.disabled = false
  }
}
const removeSubscribeClass = (event) => {
  event.target.classList.remove('input-invalid')
}

button.addEventListener('click', subscribe)
inputemail.addEventListener('focus' , removeSubscribeClass)


