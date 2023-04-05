// Adiciona um valor à entrada
function addToInput(value) {
    document.getElementById('input').value += value;
  }
  
  // Limpa a entrada
  function clearInput() {
    document.getElementById('input').value = '';
    document.getElementById('result').innerHTML = '';
  }
  
  // Realiza o cálculo e exibe o resultado
  function calculate() {
    var input = document.getElementById('input').value;
    var result = eval(input);
    document.getElementById('result').innerHTML = result;
  }
  