function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector(".change-color");

const changeColour = () => {
  
  document.body.style.backgroundColor = getRandomHexColor();

};

btnEl.addEventListener("click", changeColour)

