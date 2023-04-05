// Gera um número aleatório entre 1 e 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Obtém os elementos HTML
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resultParagraph = document.getElementById('result');

// Adiciona um evento de clique ao botão "Enviar"
submitButton.addEventListener('click', function() {
  // Obtém o valor do campo de entrada
  const guess = parseInt(guessInput.value);

  // Verifica se o valor é válido
  if (isNaN(guess) || guess < 1 || guess > 10) {
    resultParagraph.textContent = 'Por favor, insira um número entre 1 e 10.';
    return;
  }

  // Verifica se o valor é igual ao número aleatório
  if (guess === randomNumber) {
    resultParagraph.textContent = 'Parabéns, você acertou!';
  } else {
    resultParagraph.textContent = `Infelizmente, você errou. O número era ${randomNumber}.`;
  }
});
