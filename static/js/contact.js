const btn = document.querySelector('.button-contact')
const input = document.querySelectorAll('.email-input')
const textArea = document.querySelector('.form-text-area')
const feedbackContact = document.querySelector('.feedback-contact')

const addClass = async () => {
	try {
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
				isValid = false
				return item.classList.add('input-invalid')
			}
    })
    if (!isValid) return false
    btn.disabled = true
		feedbackContact.classList.remove('feedback-contact-success')
    feedbackContact.classList.remove('feedback-contact-error')
		const response = await fetch('http://localhost:3001/api/contact', {
			method: 'POST' , 
			headers: {'Content-Type': 'application/json'}, 
			body: JSON.stringify(fieldes)
    })
    if (response.status === 404) throw new Error('Сервис временно не работает')
		feedbackContact.innerHTML = 'Заявка успешно отправлена'
    feedbackContact.classList.add('feedback-contact-success')
	} catch(error) {
		console.log(888, error)
		feedbackContact.innerHTML = 'Сервис временно не работает'
		feedbackContact.classList.add('feedback-contact-error')
	} finally {
    btn.disabled = false
	}
}
const removeClass = (event) => {
    event.target.classList.remove('input-invalid')
}

btn.addEventListener('click', addClass)
    // event.addEventListener('focus', removeClass)

input.forEach(item => {
    item.addEventListener('focus', removeClass)
})




