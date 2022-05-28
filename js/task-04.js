let counterValue=0;

const button = document.querySelector('button[data-action="decrement"]');
const button2 = document.querySelector('button[data-action="increment"]');

const handleClick = function () {

  console.log('Called:',this);

  if(this.getAttribute('data-action')==='increment'){
    counterValue+=1
  }else{
    counterValue-=1
  }
  document.querySelector('span#value').textContent=counterValue;
  console.log("Button was clicked");
};

button.addEventListener("click", handleClick);
button2.addEventListener("click", handleClick);

console.log(value)
