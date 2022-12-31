
// Cursor-mouse
const cursor = document.getElementById('cursor-mouse')

if(window.screen.width >= 992){
    window.addEventListener('mousemove', function(e) {
        cursor.style.top = e.pageY - 20 + "px"
        cursor.style.left = e.pageX - 20 + "px"
        cursor.style.display = 'block'   
    })
}

// botão navbar mobile
let menuIconEl = document.querySelector('#icon-menu')
let ulNavEl = document.querySelector('header nav#navbar ul')
let iconIconEl = document.querySelector('.icon-icon-menu')

let menuIcon = false

if(window.screen.width <= 768) {
    menuIconEl.addEventListener('click', function(e) {
        
        if(menuIcon) {
            menuIcon = !menuIcon
            ulNavEl.style.opacity = 0
            ulNavEl.style.pointerEvents = 'none'
            iconIconEl.setAttribute('src', 'assets/images/hamburguer.png')
        } else {
            menuIcon = !menuIcon
            ulNavEl.style.opacity = 1
            ulNavEl.style.pointerEvents = 'all'
            iconIconEl.setAttribute('src', 'assets/images/icon-x.png')
        }


        // menuIcon ? menuIcon = false : menuIcon = true
        // menuIcon ? 
        //     ulNavEl.style.opacity = 1: 
        //     ulNavEl.style.opacity = 0
        // menuIcon ? 
        //     iconIconEl.setAttribute('src', 'assets/images/icon-x.png') :
        //     iconIconEl.setAttribute('src', 'assets/images/hamburguer.png') 
    })
}