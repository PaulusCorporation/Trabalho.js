let n = parseInt(prompt("Quantos números você vai digitar?"), 10);
let numeros = [];
let soma = 0;

for (let i = 0; i < n; i++) {
  let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
  numeros.push(numero);
  soma += numero;
}

let menor = Math.min(...numeros);
let maior = Math.max(...numeros);

alert(`Menor valor: ${menor}\nMaior valor: ${maior}\nSoma: ${soma}`);
