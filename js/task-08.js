const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

const logins=[];

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
}

logins.push({email: email.value, password: password.value})
  //console.log(`Login: ${email.value}, Password: ${password.value}`);
  console.log(logins);  
  event.currentTarget.reset();
}
