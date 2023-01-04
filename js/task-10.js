const controls = document.querySelector('#controls');
const input = controls.firstElementChild;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
   for (let i = 0; i <= amount - 1; i++) {
     const boxSizeValue = (i * 10 + 30);
     const box = document.createElement('div');
        if (boxes.lastElementChild) {
          box.style.width = `${10 + Number.parseInt(boxes.lastElementChild.style.width)}px`;
          box.style.height = `${10 + Number.parseInt(boxes.lastElementChild.style.height)}px`;
     } else {
          box.style.width = `${boxSizeValue}px`;
          box.style.height = `${boxSizeValue}px`;
     };
     box.style.backgroundColor = getRandomHexColor();
     boxes.append(box);
  };
};

function destroyBoxes() {
  boxes.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
