let firstBtn = document.querySelector(".folder-btn.first");
let secBtn = document.querySelector(".folder-btn.sec");



firstBtn.addEventListener("click", toggleFolder);
secBtn.addEventListener("click", toggleFolder);

function toggleFolder () {
    console.log("click");
    firstBtn.classList.toggle("openFolder");
    secBtn.classList.toggle("openFolder");
}