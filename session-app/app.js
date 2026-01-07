// const → valores que NÃO mudam
const loginButton = document.getElementById("loginButton");
const message = document.getElementById("message");

// Simulando credenciais fixas
const correctEmail = "test@email.com";
const correctPassword = "123456";

// let → valores que podem mudar
loginButton.addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === correctEmail && password === correctPassword) {
    message.textContent = "Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid email or password.";
    message.style.color = "red";
  }
});
