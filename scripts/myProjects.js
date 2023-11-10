let firstBtn;
let secBtn;

function toggleFolder () {
    console.log("click");
    firstBtn.classList.toggle("openFolder");
    secBtn.classList.toggle("openFolder");
    
    if (firstBtn.classList.contains("openFolder")) {
        carregarProjetos('backend');
    }
    else {
        carregarProjetos('frontend');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    carregarProjetos('frontend');
});

function carregarProjetos( arquivo ) {
    // Carrega o conteúdo do outro arquivo HTML
    fetch(`../styles/components/myProjects/${arquivo}.html`)
    .then(response => response.text())
    .then(data => {
        // Substitui o conteúdo da div pelo conteúdo do arquivo carregado
        document.getElementById('dynamic-js').innerHTML = data;
        // Pega os botões de troca de conteúdo
        firstBtn = document.querySelector(".folder-btn.first");
        secBtn = document.querySelector(".folder-btn.sec");
        firstBtn.addEventListener("click", toggleFolder);
        secBtn.addEventListener("click", toggleFolder);
    })
    .catch(error => console.error('Erro ao carregar o arquivo:', error));
}