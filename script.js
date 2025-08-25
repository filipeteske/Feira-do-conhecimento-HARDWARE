const imagens = [
    "imagens/processador.png",
    "imagens/placavideo.png",
    "imagens/placamae.png",
    "imagens/ram.png",
    "imagens/hd.png",      
    "imagens/ssd.png",     
    "imagens/fonte.png",   
    "imagens/cooler.png"
];
const textos = [
    "Processador",
    "Placa de Vídeo",
    "Placa Mãe",
    "Memória RAM",
    "HD",
    "SSD",
    "Fonte",
    "Cooler"
];
const links = [
    "conteúdo/processador.html",
    "conteúdo/placavideo.html",
    "conteúdo/placamae.html",
    "conteúdo/ram.html",
    "conteúdo/hd.html",             // novo link
    "conteúdo/ssd.html",             // novo link
    "conteúdo/fonte.html",           // novo link
    "conteúdo/cooler.html"
];

let indice = 0;

function TrocarImagem() {
    const img = document.getElementById("peça");
    const h2 = document.querySelector("h2");

    img.classList.remove("fade-in");
    h2.classList.remove("fade-in");
    void img.offsetWidth;
    void h2.offsetWidth;

    
    indice = (indice + 1) % imagens.length;

    img.src = imagens[indice];
    h2.textContent = textos[indice];
    document.getElementById("saibaMais").href = links[indice];

    img.classList.add("fade-in");
    h2.classList.add("fade-in");
}

function VoltarImagem() {
    const img = document.getElementById("peça");
    const h2 = document.querySelector("h2");

    img.classList.remove("fade-in");
    h2.classList.remove("fade-in");
    void img.offsetWidth;
    void h2.offsetWidth;

    
    indice = (indice - 1 + imagens.length) % imagens.length;

    img.src = imagens[indice];
    h2.textContent = textos[indice];
    document.getElementById("saibaMais").href = links[indice];

    img.classList.add("fade-in");
    h2.classList.add("fade-in");
}

window.onload = function() {
    
    document.getElementById("peça").src = imagens[0];
    document.querySelector("h2").textContent = textos[0];
    document.getElementById("saibaMais").href = links[0];
    indice = 0;
};
