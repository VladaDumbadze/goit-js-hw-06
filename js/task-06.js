const inputEl = document.getElementById("validation-input");

const validTextValue = inputEl.dataset.length;
const getValid = () => {
    const value = inputEl.value.length
    value == validTextValue
          ?inputEl.className ="valid"
   
         :inputEl.className ="invalid"    
};

inputEl.addEventListener("blur", getValid);
