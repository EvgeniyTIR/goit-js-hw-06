const input = document.querySelector('div#controls input');
const amount = input.addEventListener("input", (event) => {
  event.currentTarget.value;  
});

function createBoxes(amount){
  const boxes = document.querySelector('div#boxes')
for(i=0; i<amount; i+=1){
  boxes.append(document.createElement(div))
};
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
