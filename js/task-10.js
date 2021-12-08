function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputEl = document.querySelector("#controls > input");
const createEl = document.querySelector(' button[data-create]');
const destroyEl = document.querySelector(' button[data-destroy]');
const boxCangeEl = document.getElementById("boxes");


  



inputEl.addEventListener("input", event => {
  if (event.currentTarget.value = 1) {
     boxCangeEl.style.width = "30px";
     boxCangeEl.style.height = "30px";
   }
         
    
});
// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });