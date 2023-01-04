const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');
const ingredientItemNames = ingredients.map(createIngredient);

function createIngredient(ingredient){
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;
  return ingredientItem;
};

ingredientList.append(...ingredientItemNames);
