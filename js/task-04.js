const counterValue = document.querySelector("#value");
debugger

const BtnDec = document.querySelector(' button[data-action="decrement"]');
const BtnInc= document.querySelector(' button[data-action="increment"]');


const DecClick = () => {
  counterValue.textContent = counterValue.textContent - 1;
};
BtnDec.addEventListener("click", DecClick);

const IncClick = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
BtnInc.addEventListener("click", IncClick);

