const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');

 
const elements = ingredients.map(option => {
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.textContent = option;

  return listItem;
}) 


listEl.append(...elements);
