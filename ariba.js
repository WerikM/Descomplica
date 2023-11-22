// Função para gerar um número aleatório entre dois valores
function gerarNumeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Função para calcular o cosseno de um ângulo em graus
  function calcularCosseno(angulo) {
    var radianos = angulo * Math.PI / 180;
    return Math.cos(radianos);
  }
  
  // Exemplo de uso dos métodos
  var numero1 = 3;
  var numero2 = 12;
  var angulo = 55;
  
  var resultadoMax = Math.max(numero1, numero2); 
  var resultadoMin = Math.min(numero1, numero2); 
  var resultadoCosseno = calcularCosseno(angulo); 
  var numeroAleatorio = gerarNumeroAleatorio(1, 100);
  
  console.log("Maior valor: " + resultadoMax);
  console.log("Menor valor: " + resultadoMin);
  console.log("Cosseno de " + angulo + " graus: " + resultadoCosseno);
  console.log("Número aleatório: " + numeroAleatorio);
  