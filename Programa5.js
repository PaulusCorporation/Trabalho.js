function calcularCirculo() {
    let raio = parseFloat(prompt("Digite o raio do círculo:"));
    const pi = Math.PI;
  
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;
  
    alert(`Área do círculo: ${area.toFixed(2)}\nPerímetro do círculo: ${perimetro.toFixed(2)}`);
  }
  
  calcularCirculo();
