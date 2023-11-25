//Desafios

// 1) Crie um contador que comece em 1 e vá até 10 usando um loop while. 
//Mostre cada número.
let contador = 1;

while (contador <= 10) {
  console.log(contador);
  contador++;
}

// 2) Crie um contador que começa em 10 e vá até 0 usando um loop while. 
//Mostre cada número.
let contador = 10;

while (contador >= 0) {
  console.log(contador);
  contador--;
}
//Resultado
10
9
8
7
6
5
4
3
2
1
0

// 3) Crie um programa de contagem regressiva. Peça um número e conte deste 
//número até 0, usando um loop while no console do navegador.

// Solicita um número ao usuário
var numero = prompt("Digite um número para a contagem regressiva:");

// Converte o valor digitado para um número inteiro
numero = parseInt(numero);

// Verifica se o valor inserido é um número válido
if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    // Inicia a contagem regressiva usando um loop while
    console.log("Contagem regressiva iniciada:");
    
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }

    console.log("Contagem regressiva concluída!");
}
//Resultado
Contagem regressiva iniciada:
5
4
3
2
1
0
Contagem regressiva concluída!



// 4) Crie um programa de contagem progressiva. Peça um número e conte de 0 
//até esse número, usando um loop while no console do navegador.
// Solicita um número ao usuário
var numero = prompt("Digite um número:");

// Converte o input do usuário para um número inteiro
numero = parseInt(numero);

// Verifica se o input é um número válido
if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    // Inicializa a variável de contagem
    var contador = 0;

    // Usa um loop while para contar até o número fornecido pelo usuário
    while (contador <= numero) {
        console.log(contador);
        contador++;
    }
}
//Exemplo, n° 10
0
1
2
3
4
5
6
7
8
9
10
