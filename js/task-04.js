const incrementBtn = document.querySelector(`[data-action="increment"]`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const value = document.querySelector('#value');

const incrementValue = () => value.textContent = Number(value.textContent) + 1;
const decrementValue = () => value.textContent = Number(value.textContent) - 1;

incrementBtn.addEventListener('click', incrementValue);
decrementBtn.addEventListener('click', decrementValue);


