const imagens = [
    "imagens/processador.png",
    "imagens/placavideo.png",
    "imagens/ram.png",
    "imagens/hd.png",     
    "imagens/ssd.png",     
    "imagens/fonte.png"   
];
const textos = [
    "Processador",
    "Placa de Vídeo",
    "Memória RAM",
    "HD",                  
    "SSD",                  
    "Fonte"               
];
const links = [
    "conteúdo/processador.html",
    "conteúdo/placavideo.html",
    "conteúdo/ram.html",
    "conteúdo/hd.html",             
    "conteúdo/ssd.html",             
    "conteúdo/fonte.html"           
];

let indice = 0;

function TrocarImagem() {
   
    document.getElementById("peça").src = imagens[indice];
    document.querySelector("h2").textContent = textos[indice];
    document.getElementById("saibaMais").href = links[indice];

    
    indice = (indice + 1) % imagens.length;
}

function VoltarImagem() {
    
    indice = (indice - 1 + imagens.length) % imagens.length;
    document.getElementById("peça").src = imagens[indice];
    document.querySelector("h2").textContent = textos[indice];
    document.getElementById("saibaMais").href = links[indice];
}

window.onload = function() {
    
    document.getElementById("peça").src = imagens[0];
    document.querySelector("h2").textContent = textos[0];
    document.getElementById("saibaMais").href = links[0];
    indice = 1; 
};
