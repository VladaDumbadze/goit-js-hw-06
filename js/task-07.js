const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

const changeTextSize = () => {
  
    const rangeValue = inputEl.value;

    spanEl.style.fontSize = `${rangeValue}px`;
    console.log(rangeValue);

};

inputEl.addEventListener("input", changeTextSize);
