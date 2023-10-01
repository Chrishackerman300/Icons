//Variables Para el Menu
const btn = document.querySelector('.menu__btn')
const sidebar = document.querySelector('.navegation__menu')

//Funcion para reducir el menu
btn.addEventListener('click' , ()=> {
    sidebar.classList.toggle('active')
})

//Varaibles para el DarkMode
const btndark = document.querySelector('.darkbutton')
const body = document.querySelector('body')

//Funcion para reducir el menu
btndark.addEventListener('click', ()=> {
    body.classList.toggle('darkmode')
})