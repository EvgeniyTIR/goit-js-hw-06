const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = [];
ingredients.forEach((item, i) => {
  const itemLi = document.createElement("li");
  itemLi.textContent = item;
  itemLi.className="item";
  items.push(itemLi);
});

document.querySelector('ul#ingredients').append(...items);

console.log(document.querySelector('ul#ingredients')); // <h1></h1>
