const select1 = document.getElementById('select-1')
const select2 = document.getElementById('select-2')
const button1 = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')
const button4 = document.getElementById('button-4')

const allcontent = document.getElementById('select-1')
const alloptions = [...allcontent.children]

button1.addEventListener('click', () => {
    const option = select1.children[select1.selectedIndex]
    if (select2.children.length == 0) {
        select2.insertAdjacentHTML("beforeend", `<option>${option.value}</option>`)
        select1.removeChild(option)
    } else if (select2.children.length > 0){
        if (select2.lastChild.value != option.value) {
                select2.insertAdjacentHTML("beforeend", `<option>${option.value}</option>`)
                select1.removeChild(option)
            }
        }
})

button2.addEventListener('click', () => {
    const option2 = select2.children[select2.selectedIndex]
    if (select1.children.length == 0) {
        select1.insertAdjacentHTML("beforeend", `<option>${option2.value}</option>`)
        select2.removeChild(option2)
    } else if (select1.children.length > 0) {
        if (select1.lastChild.value != option2.value) {
            select1.insertAdjacentHTML("beforeend", `<option>${option2.value}</option>`)
            select2.removeChild(option2)
        }
    }
})


button3.addEventListener('click', () => {
    select2.textContent = ''
    for (const o of alloptions) {
        select2.insertAdjacentHTML("afterbegin", `<option>${o.value}</option>`)
    }
    for (const r of alloptions){
        select1.remove(r)
    }
})

button4.addEventListener('click', () => {
    select1.textContent = ''
    for (const op of alloptions) {
        select1.insertAdjacentHTML("afterbegin", `<option>${op.value}</option>`)
    }
    for (const re of alloptions){
        select2.remove(re)
    }
})