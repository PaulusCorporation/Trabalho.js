let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`), 10);

  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

alert(`Pares: ${pares} \nÍmpares: ${impares}`);

