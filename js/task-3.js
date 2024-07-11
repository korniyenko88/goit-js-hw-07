const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const userInput = nameInput.value.trim();
  if (userInput !== '') {
    nameOutput.textContent = `Hello, ${userInput}!`;
  } else {
    nameOutput.textContent = 'Hello, Anonymous!';
  }
});