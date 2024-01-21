// Desafios
// Criar uma função que exibe "Olá, mundo!" no console.

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function olaMundo(){
    console.log('Olá mundo');
}

olaMundo();




function nomeConsole(nome){
    console.log(`Olá ${nome}`);
}

nomeConsole('Marcelo');




function dobrarNumero(numero){
    return numero * 2;
}

let resultadoDobro = dobrarNumero(2);
console.log(resultadoDobro);




function calculaMedia(numero1,numero2,numero3){
    return (numero1 + numero2 + numero3) / 3;
}

let media = calculaMedia(10,9,6);
console.log(media);




function numeroMaior(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }
    else{
        if(numero1 == numero2){
            console.log('Os numeros possuem os mesmos valores');
        }
        return numero2;
    }
}

let maiorNumero = numeroMaior(15,34);
console.log(maiorNumero);



function multiplicaNumero(numero){
    return numero * numero;
}

let resultado = multiplicaNumero(23);
console.log(resultado); 