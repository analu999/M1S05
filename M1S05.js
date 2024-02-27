/* Questão 1 */
/* const promptSync = require("prompt-sync")();

const frutas = [];

for (let i = 0; i < 3; i++) {
  const fruta = promptSync("Insira a " + (i + 1) + "ª fruta: ");
  frutas.push(fruta);
}

console.log("A segunda fruta é: " + frutas[1]); */
/* Questão 2 */
// Crie um array chamado frutas contendo três frutas diferentes
/* let frutas = ['Maçã', 'Banana', 'Morango']; */

// Adicione mais uma fruta ao array frutas
/* frutas.push('Uva'); */

// Imprima o array atualizado no console
/* console.log(frutas); */

// Remova a primeira fruta do array
/* frutas.shift(); */

// Imprima o array atualizado no console
/* console.log(frutas); */
/* Questão 3 */
/* const promptSync = require("prompt-sync")();

// Crie um array chamado numeros contendo cinco números inteiros
let numeros = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(promptSync("Insira um número inteiro: "));
  numeros.push(numero);
}

// Imprima cada número do array no console
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
} */
/* Questão 4 */
/* const promptSync = require("prompt-sync")(); */

// Crie um array chamado numeros contendo cinco números inteiros
/* let numeros = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(promptSync("Insira um número inteiro: "));
  numeros.push(numero);
} */

// Calcule e imprima a soma de todos os elementos do array
/* let soma = numeros.reduce((acc, curr) => acc + curr, 0);
console.log(`A soma de todos os elementos do array é: ${soma}`);

/* Questão 5 */
/* const promptSync = require("prompt-sync")();

// Crie um array chamado numeros contendo cinco números inteiros
let numeros = []; 

for (let i = 0; i < 5; i++) {
  let numero = parseInt(promptSync("Insira um número inteiro: "));
  numeros.push(numero);
}

// Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros
let numerosOrdenados = [...numeros];

// Ordene esse novo array em ordem crescente
numerosOrdenados.sort((a, b) => a - b);

// Imprima o array ordenado no console
console.log(numerosOrdenados); */


/* Questão 6 */
/* const promptSync = require("prompt-sync")();

// Crie um array chamado numeros contendo cinco números inteiros
let numeros = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(promptSync("Insira um número inteiro: "));
  numeros.push(numero);
}

// Crie um array chamado pares que contenha apenas os números pares do array numeros
let pares = numeros.filter((numero) => numero % 2 === 0);

// Imprima o array pares no console
console.log(pares); */

/* Questão 7 */
const promptSync = require("prompt-sync")();

// Crie um array chamado numeros contendo cinco números inteiros
let numeros = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(promptSync("Insira um número inteiro: "));
  numeros.push(numero);
}

// Crie um array chamado quadrados que contenha o quadrado de cada número do array numeros
let quadrados = numeros.map((numero) => numero * numero);

// Imprima o array quadrados no console
console.log(quadrados);