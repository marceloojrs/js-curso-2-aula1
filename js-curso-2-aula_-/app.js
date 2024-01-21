let numeroAleatorioLista= [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}
function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){

        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Parabens você acertou o numero secreto');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }
        else{
            exibirTextoNaTela('p', 'O numero sercreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroAleatorio = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = numeroAleatorioLista.length;

    if(quantidadeElementosLista == numeroLimite){
        numeroAleatorioLista = [];
    }

    if(numeroAleatorioLista.includes(numeroAleatorio)){
        gerarNumeroAleatorio();
    }
    else{
        numeroAleatorioLista.push(numeroAleatorio);
        console.log(numeroAleatorioLista);
        return numeroAleatorio;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

