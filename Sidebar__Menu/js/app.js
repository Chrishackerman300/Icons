document.addEventListener('DOMContentLoaded', () => {

    //Variables
    const openMenu = document.querySelector('#open-menu')
    const sidebar = document.querySelector('#navegation-menu')
    const closeMenu = document.querySelector('#close-menu')
    const openSubmenu = document.querySelector('#btn-submenu')
    const submenu = document.querySelector('#submenu')
    const btnDarkmode = document.querySelector('#checkbox')
    const body = document.querySelector('body')

    cargarEventos()

    function cargarEventos(){
        openMenu.addEventListener('click', showMenu)
        closeMenu.addEventListener('click', removeMenu)
        openSubmenu.addEventListener('click', showSubmenu)
        btnDarkmode.addEventListener('click', showDarkmode)
    }

    function showMenu(){
        sidebar.classList.add('show-menu')
    }

    function removeMenu(){
        if(sidebar.classList.contains('show-menu')){
            sidebar.classList.remove('show-menu')
        }
    }

    function showSubmenu(){
        if(submenu.classList.contains('show-submenu')){
            submenu.classList.remove('show-submenu')
        }
        else{
            submenu.classList.add('show-submenu')
        }
    }

    function showDarkmode(){
        if(body.classList.contains('darkmode')){
            body.classList.remove('darkmode')
        }
        else{
            body.classList.add('darkmode')
        }
    }
})