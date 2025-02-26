let audios = [
    {caminho:'https://youtu.be/O9F1XMwJG1k?si=IfeeiblGbHg7LwrR, legenda:'Boi soberano'},
    {caminho:'https://youtu.be/sscvxKHfW4c?si=lCUEkAPiY1lEfSmM, legenda:'Boate Azul'},
    {caminho:'https://youtu.be/M3w2xDPHr90?si=8ZFooTL2ibkzerXD, legenda:'Mamba negra'},
    {caminho:'https://youtu.be/vOElyIyRPdE?si=ZB391HluNO5jzn56', Portal do universo:'Hayit'},
    {caminho:'https://youtu.be/KeUSDZ6xkYA?si=gSnuytdYNkRX8GKJ', Um bom lugar:'Helena'},
    {caminho:'https://youtu.be/TfJsiSMC0U8?si=q9bhxqs207_Zdr6V', legenda:'Dormi na praça'},
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
