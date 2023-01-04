const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const chageSize = () => text.style.fontSize = input.value + 'px';

input.addEventListener('input', chageSize);
