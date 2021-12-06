const getInput = document.getElementById("name-input");
const getSpan = document.getElementById("name-output");
debugger

getInput.addEventListener("input", event => {
    event.currentTarget.value === ""
        ? getSpan.textContent = "Anonymous"
        : getSpan.textContent = event.currentTarget.value; 
});