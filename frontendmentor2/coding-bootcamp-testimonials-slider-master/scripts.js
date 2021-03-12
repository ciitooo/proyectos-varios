const buttonPrev = document.getElementById('button-prev')
const buttonNext = document.getElementById('button-next')
const card1 = document.getElementById('card-1')
const card2 = document.getElementById('card-2')

let valor = 0
 buttonNext.addEventListener('click', () => {
	valor += 1
	 if (valor % 2 == 0) {
		card2.classList.replace('card-active', 'card-inactive')
		card1.classList.replace('card-inactive', 'card-active')
	} else {
		card1.classList.replace('card-active', 'card-inactive')
	 	card2.classList.replace('card-inactive', 'card-active')
	}
})
buttonPrev.addEventListener('click', () => {
	valor -= 1
	if (valor % 2 == 0) {
		card2.classList.replace('card-active', 'card-inactive')
		card1.classList.replace('card-inactive', 'card-active')
	} else {
		card1.classList.replace('card-active', 'card-inactive')
	 	card2.classList.replace('card-inactive', 'card-active')
	}
 })
