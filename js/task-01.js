const categoryList = document.querySelector('#categories');
const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);
// console.log(`Number of categories: ${categoryList.children.length}`);
   
function makeLIst(category) {
     console.log(`Category:${category.firstElementChild.textContent}`);
     console.log(`Elements:${category.lastElementChild.children.length}`);
};

categories.forEach(makeLIst);
