const form = document.getElementById('form')
const name1 = document.getElementById('name')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) =>{
	e.preventDefault()
	 validateName(name1)
	 validateLastname(lastname)
	 validatePasswordComplex(password)
	 validateEmail(email)
})

const validateName = (name1) =>{
	const nameRegex = /([A-Za-z]){3,50}/
	if (nameRegex.test(name1.value)) {
		console.log('nombre válido')
	} else {
		const p = document.createElement("p")
		p.textContent = "nombre inválido"
		form.appendChild(p)
	}
}

const validateLastname = (lastname) =>{
	const nameRegex = /([A-Za-z]){3,50}/
	if (nameRegex.test(lastname.value)) {
		console.log('apellido válido')
	} else console.log('apellido invalido')
}

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(emailRegex.test(email.value)) console.log('email válido')
    else console.log('email incorrecto')
}

const validatePasswordComplex = (password) => {
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    if(passwordRegex.test(password.value)) console.log('password válido')
    else console.log('password incorrecto')
}