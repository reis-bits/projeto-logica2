let NumeroAleatorio = gerarNumeroAleatorio();
const botaoVerificacao = document.querySelector('#verificar');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Diga um número entre 1 e 10')

botaoVerificacao.onclick = function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == NumeroAleatorio);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}