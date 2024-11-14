// sintaxe básica do operador ternário
// O operador ternário é uma forma de simplificar a estrutura de um if/else
// Ele é composto por três partes:
// 1. A condição a ser testada
// 2. O que fazer caso a condição seja verdadeira
// 3. O que fazer caso a condição seja falsa
// A sintaxe é a seguinte:
// condição ? valor_se_verdadeiro : valor_se_falso 

// exemplo  1
let idadeVoto1 = 16;

const votacao = idadeVoto1 < 16 ? 'Não pode votar' : 'Está apto para votar';
console.log(votacao);

// exemplo 1 
const idadeVoto = 15;
let mensagem = '';

if (idadeVoto < 16) {
    mensagem = 'não pode votar!'
}
else {
    mensagem = 'está apto para votar!'
}

console.log(`O cidadão ${mensagem}`);

