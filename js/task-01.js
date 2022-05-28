  const categories = document.querySelectorAll('ul#categories li.item').length
  console.log('Number of categories:', categories);
document.querySelectorAll('ul#categories li.item').forEach((item, i) => {
    console.log('Category:', item.firstElementChild.textContent)
    console.log('Elements:', item.querySelectorAll('li').length)
  });
  ;
