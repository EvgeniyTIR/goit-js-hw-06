const input = document.querySelector('div#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('div#boxes');

 
  createBtn.addEventListener("click", () => createBoxes(input.value));
  destroyBtn.addEventListener("click", () => {
    boxes.innerHTML =''    
   });
  

 function createBoxes(amount) {
  const elemensBox =[];

  for(let i = 0; i < amount; i+=1){
    const element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();
    if(!boxes.lastElementChild === true){          
      element.style.height = (30 + i*10) +'px' ;
      element.style.width = (30 + i*10) +'px' ;      
      elemensBox.push(element);      
    }else {     
      let lastElSize = parseInt(boxes.lastElementChild.style.height);      
      element.style.height = lastElSize + (i+1)*10 +'px' ;
      element.style.width = lastElSize + (i+1)*10 +'px' ;
      elemensBox.push(element);      
    } 
  };
   boxes.append(...elemensBox);    
} 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
