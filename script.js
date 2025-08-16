const imagens = [
    "imagens/processador.png",
    "imagens/placavideo.png",
    "imagens/ram.png",
    "imagens/hd.png",      // nova imagem
    "imagens/ssd.png",     // nova imagem
    "imagens/fonte.png"   // nova imagem
];
const textos = [
    "Processador",
    "Placa de Vídeo",
    "Memória RAM",
    "HD",                  // novo texto
    "SSD",                  // novo texto
    "Fonte"               // novo texto
];
const links = [
    "conteúdo/processador.html",
    "conteúdo/placavideo.html",
    "conteúdo/ram.html",
    "conteúdo/hd.html",             // novo link
    "conteúdo/ssd.html",             // novo link
    "conteúdo/fonte.html"           // novo link
];

let indice = 0;

function TrocarImagem() {
    // Atualiza imagem, texto e link
    document.getElementById("peça").src = imagens[indice];
    document.querySelector("h2").textContent = textos[indice];
    document.getElementById("saibaMais").href = links[indice];

    // Avança para o próximo índice (volta ao início se passar do último)
    indice = (indice + 1) % imagens.length;
}

function VoltarImagem() {
    // Volta para o índice anterior (volta ao final se estiver no início)
    indice = (indice - 1 + imagens.length) % imagens.length;
    document.getElementById("peça").src = imagens[indice];
    document.querySelector("h2").textContent = textos[indice];
    document.getElementById("saibaMais").href = links[indice];
}

window.onload = function() {
    // Inicializa com o primeiro item
    document.getElementById("peça").src = imagens[0];
    document.querySelector("h2").textContent = textos[0];
    document.getElementById("saibaMais").href = links[0];
    indice = 1; // Para que o primeiro clique vá para o segundo item
};