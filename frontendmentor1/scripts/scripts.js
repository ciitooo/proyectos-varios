const form = document.getElementById('form')
const name1 = document.getElementById('name')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const pname = document.getElementById('p__name')
const plastname = document.getElementById('p__lastname')
const pemail = document.getElementById('p__email')
const ppassword = document.getElementById('p__password')

form.addEventListener('submit', (e) =>{
	e.preventDefault()
	validateName()
	validateLastname(lastname)
	validatePasswordComplex(password)
	validateEmail(email)
})

// validaciones despues de un cambio en el input

name1.addEventListener('change', ()=> {
	const nameRegex = /([A-Za-z]){3,50}/
	if (nameRegex.test(name1.value))  {
		name1.classList.add("form__validate--okey")
		name1.classList.remove("form__item--icon")
		pname.classList.remove("form__invalid--text")
		pname.classList.add("form__valid--text")
	} else{
		name1.classList.remove("form__validate--okey")
		name1.classList.add("form__item--icon")
		pname.classList.remove("form__valid--text")
		pname.classList.add("form__invalid--text")
	}
})

lastname.addEventListener('change', () => {
	const nameRegex = /([A-Za-z]){3,50}/
	if (nameRegex.test(lastname.value)) {
		lastname.classList.add("form__validate--okey")
		lastname.classList.remove("form__item--icon")
		plastname.classList.remove("form__invalid--text")
		plastname.classList.add("form__valid--text")
	}
	else {
		lastname.classList.remove("form__validate--okey")
		lastname.classList.add("form__item--icon")
		plastname.classList.remove("form__valid--text")
		plastname.classList.add("form__invalid--text")
	}
})

email.addEventListener('change', () => {
	const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(emailRegex.test(email.value)) {
		email.classList.add("form__validate--okey")
		email.classList.remove("form__item--icon")
		pemail.classList.remove("form__invalid--text")
		pemail.classList.add("form__valid--text")
	}
    else {
		email.classList.remove("form__validate--okey")
		email.classList.add("form__item--icon")
		pemail.classList.remove("form__valid--text")
		pemail.classList.add("form__invalid--text")
	}
})

password.addEventListener('change', () => {
	const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    if(passwordRegex.test(password.value)) {
		password.classList.add("form__validate--okey")
		password.classList.remove("form__item--icon")
		ppassword.classList.remove("form__invalid--text")
		ppassword.classList.add("form__valid--text")
	}
    else {
		password.classList.remove("form__validate--okey")
		password.classList.add("form__item--icon")
		ppassword.classList.remove("form__valid--text")
		ppassword.classList.add("form__invalid--text")
	}
})



// -------------------------------


// validaciones despues del submit

const validateName = (name1) => {
	const nameRegex = /([A-Za-z]){3,50}/
	if (nameRegex.test(name1)) console.log("nombre valido")
	else console.log("nombre invalido")
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


// ------------------------