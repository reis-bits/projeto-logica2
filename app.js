let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
const botaoVerificacao = document.querySelector('#verificar');

titulo.innerHTML = 'Jogo do número secreto';
paragrafo.innerHTML = 'Diga um número entre 1 e 10';


botaoVerificacao.onclick = function verificarChute() {
    console.log('O botão foi clicado');
}