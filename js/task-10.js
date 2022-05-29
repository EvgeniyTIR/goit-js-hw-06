const input = document.querySelector('div#controls input');
const amount = input.addEventListener("input", (event) => {
  event.currentTarget.value;  
});

function createBoxes(amount){
  const boxes = document.querySelector('div#boxes')
for(let i = 0; i < amount; i+=1){
  const div = document.createElement(div);
  div.size = (30 + i*10) +'px' ;
  boxes.append(div);
};
}
console.log(createBoxes())
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
