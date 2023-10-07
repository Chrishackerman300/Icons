//Varaibles open modal
const btn = document.querySelector('.open--modal')
const showModal = document.querySelector('.modal')
const cbtn = document.querySelector('.close--modal')

//Abrir Modal
btn.addEventListener('click', ()=> {
    showModal.classList.add('active') //Aniade la clase active al modal cuando clickemos btn
})

//Cerrar modal
cbtn.addEventListener('click', ()=> {
    showModal.classList.remove('active') //Quita la clase active al modal cuando clickemos cbtn
})