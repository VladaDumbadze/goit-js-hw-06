const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = ingredients
  .map((ingredient) => `<li class="list-item">${ingredient}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
