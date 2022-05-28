const input = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

input.addEventListener("input", (event) => {
  spanText.style.fontSize= event.currentTarget.value+'px';

});
