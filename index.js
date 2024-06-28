const prompt = require('prompt-sync')();

let num = prompt("Digite um número para calcular o fatorial: ");

if(num < 0) {
    console.log("Dados incorretos. Tente novamente com um número positivo. ")
} else {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    console.log(`O fatorial do número ${num} é igual a ${resultado}`)
}