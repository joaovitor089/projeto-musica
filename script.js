let audios = [
    {caminho:'https://youtu.be/O9F1XMwJG1k?si=IfeeiblGbHg7LwrR, legenda:'Boi soberano'},
    {caminho:'https://youtu.be/sscvxKHfW4c?si=lCUEkAPiY1lEfSmM, legenda:'Boate Azul'},
    {caminho:', legenda:'Paula Fernandes'},
    {caminho:'Hayit.mp3', legenda:'Hayit'},
    {caminho:'Helena.mp3', legenda:'Helena'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
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
