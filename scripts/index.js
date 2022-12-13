// Cursor-mouse
const cursor = document.getElementById('cursor-mouse')

window.addEventListener('mousemove', function(e) {
    cursor.style.top = e.pageY - 20 + "px"
    cursor.style.left = e.pageX - 20 + "px"
    cursor.style.display = 'block'
})

// window.addEventListener('scroll', () => {cursor.style.display = 'none'} )