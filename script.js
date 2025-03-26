let audios = [
    {caminho:'musica1.mp3, boi soberano:'Boi soberano'},
    {caminho:'musica2.mp3,boate azul:'Boate Azul'},
    {caminho:'nusica3.mp3,mamba negra:'Mamba negra'},
    {caminho:'musica4.mp3', Portal do universo:'portal do universo'},
    {caminho:'musica5.mp3', Um bom lugar:'um bom lugar'},
    {caminho:'musica6.mp3', dormi na praça :'Dormi na praça'},
    {caminho:'musica7.mp3', céu azul:'Céu azul'},
    {caminho:'musica8.mp3,nz conta da loucura:'Nz conta da loucura'},
    {caminho:´musica9.mp3',fundo da grota:'Fundo da grota'},
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
