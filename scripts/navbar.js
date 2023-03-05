////// Códigos para efeito no botão navbar mobile
if(window.screen.width <= 812) {

const menuIconEl = document.querySelector('#icon-menu')
const itens = document.querySelectorAll('.ulNav li a')
const iconIconEl = document.querySelector('.icon-icon-menu')

let menuIcon = false

let lista = []

itens.forEach(item => {
    lista.push(item.textContent)
    item.textContent = ''
})

/// TIMER
function timer(ms) {
    return new Promise( resolve => {
        setTimeout(()=> {resolve('')}, ms)
    })
}

// efeito digitar
async function typing(clicked) {
    if(clicked) {
        for(let i = 0; i < itens.length; i++) {
            itens[i].style.display = 'inline-block'
            for(let b = 0; b < lista[i].length; b++) {
            await timer(40)
            itens[i].textContent += lista[i].charAt(b)
            }
        }
    } else {
        for(let i = 0; i < itens.length; i++) {
            var itemList = itens[i].textContent.split('')
            for(let b = 0; b < lista[i].length; b++) {
                await timer(40)   
                itemList.pop()
                itens[i].textContent = itemList.join('')
            }
            itens[i].style.display = 'none'
        } 
    }
}

// click botão haburg
    menuIconEl.addEventListener('click', () => {
        if(menuIcon) {
            menuIcon = !menuIcon
            typing(false)
            iconIconEl.setAttribute('src', 'assets/images/hamburguer.png')
        } else {
            menuIcon = !menuIcon
            typing(true)
            iconIconEl.setAttribute('src', 'assets/images/icon-x.png')
        }
    })
} // fecha if linha 2