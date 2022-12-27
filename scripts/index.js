// Cursor-mouse
const cursor = document.getElementById('cursor-mouse')

if(window.screen.width >= 992){
    window.addEventListener('mousemove', function(e) {
        cursor.style.top = e.pageY - 20 + "px"
        cursor.style.left = e.pageX - 20 + "px"
        cursor.style.display = 'block'
        
    })
}
