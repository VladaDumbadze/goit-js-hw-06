const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
     alert("Please fill in all the fields!");
  }
  else {
        let userObject = new Object();
        userObject.email = event.currentTarget.elements.email.value;
        userObject.password = event.currentTarget.elements.password.value;
        console.log(userObject);
        form.reset();
    }
  

};