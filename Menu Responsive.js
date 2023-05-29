//Interaccion con el boton para desplegar el menu
const btn = document.querySelector('.boton')
const navbar = document.querySelector('.menu')

btn.addEventListener('click', ()=> {
    navbar.classList.toggle('activo');
})

//Interaccion con la flecha para desplegar el submenu
const row = document.querySelector('.link-flecha');
const sub = document.querySelector('.submenu');

row.addEventListener('click', ()=> {
    sub.classList.toggle('active');
})
