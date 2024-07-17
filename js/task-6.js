function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }

const controlsDiv = document.getElementById('controls');
const boxesDiv = document.getElementById('boxes');

let currentAmount = 0;

controlsDiv.querySelector('[data-create]').addEventListener('click', createBoxes);
controlsDiv.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function createBoxes() {
  const amountInput = controlsDiv.querySelector('input[type="number"]');
  const amount = parseInt(amountInput.value, 10);
  if (amount < 1 || amount > 100) return;

  createBoxesInner(amount);
  amountInput.value = '';
}

function createBoxesInner(amount) {
  boxesDiv.innerHTML = '';
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}
