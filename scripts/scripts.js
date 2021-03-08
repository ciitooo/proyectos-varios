const select1 = document.getElementById('select-1')
const select2 = document.getElementById('select-2')
const button1 = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')
const button4 = document.getElementById('button-4')



button1.addEventListener('click', (e) => {
    const option = select1.options[select1.selectedIndex].value
    select2.filter(item => console.log(item))
    if (select2.value.includes(option) == false) {
        select2.insertAdjacentHTML("afterbegin", `<option>${option}</option>`)
    }
})


const allcontent = document.querySelectorAll('select-1')
const alloptions = Array.apply(null, allcontent);

// button3.addEventListener('click', (e) => {
//     select2.insertAdjacentHTML("afterbegin", ``)
//     })



// focus cuando haces foco en el select
// blur cuando dejas de hacer foco en el select
// change cuando cambias el elemento seleccionado