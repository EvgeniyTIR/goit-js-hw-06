const input = document.querySelector('div#controls input');
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')


input.addEventListener("input", (event) => {
 let amount =  event.currentTarget.value;    
 createBtn.addEventListener("click", () => createBoxes(amount));
function createBoxes(amount) {
  const boxes = document.querySelector('div#boxes')
  for(let i = 0; i < amount; i+=1){
    const element = document.createElement("div");
    element.size = (30 + i*10) +'px' ;
    boxes.append(element);
  };
}
});




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
