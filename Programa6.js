function calcularInvestimento() {
    let capital = parseFloat(prompt("Digite o capital inicial (em R$):"));
    let taxa = parseFloat(prompt("Digite a taxa de juros mensal (em %):"));
    let tempo = parseInt(prompt("Digite o tempo do investimento (em meses):"), 10);
  
    let taxaDecimal = taxa / 100; 
    let montante = capital * Math.pow((1 + taxaDecimal), tempo);
  
    alert(`Montante após ${tempo} meses: R$ ${montante.toFixed(2)}`);
  }
  
  calcularInvestimento();
  
