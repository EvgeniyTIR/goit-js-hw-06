const chageColorButton = document.querySelector(".change-color");
const spanСolor= document.querySelector("span.color");
let bodyColor = document.body.style;

const handleClick = () => {
  let backgroundColor=getRandomHexColor();
bodyColor.backgroundColor=backgroundColor;
spanСolor.textContent=backgroundColor;
  console.log("Button was cclicked");
};

chageColorButton.addEventListener("click", handleClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
