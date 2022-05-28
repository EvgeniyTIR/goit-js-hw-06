const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.forEach((item, i) => {
  const itemLi = document.createElement("li");
  itemLi.textContent = item;
  itemLi.className="item";

  document.querySelector('ul#ingredients').append(itemLi)
});

console.log(document.querySelector('ul#ingredients')); // <h1></h1>
