let audios = [
    {caminho:'musica1.mp3, legenda:'Boi soberano'},
    {caminho:'musica2.mp3, legenda:'Boate Azul'},
    {caminho:'nusica3.mp3, legenda:'Mamba negra'},
    {caminho:'musica4.mp3', Portal do universo:'Hayit'},
    {caminho:'musica5.mp3', Um bom lugar:'Helena'},
    {caminho:'musica6.mp3', legenda:'Dormi na praça'},
    {caminho:'musica7.mp3', legenda:'Céu azul'},
    {caminho:'musica8.mp3, legenda:'Nz conta da loucura'},
    {caminho:´musica9.mp3', legenda:'Fundo da grota'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
