const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const outputText = () => input.value === '' ? output.textContent = 'Anonymous' : output.textContent = input.value;

input.addEventListener('input', outputText);