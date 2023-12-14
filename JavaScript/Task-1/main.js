document
  .getElementById("first-name")
  .addEventListener("input", validateFirstName);

document
  .getElementById("last-name")
  .addEventListener("input", validateLastName);

document.getElementById("email").addEventListener("input", validateEmail);

document.getElementById("password").addEventListener("input", validatePassword);

document
  .getElementById("confirm-password")
  .addEventListener("input", validateConfirmPassword);

document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (isFormValid(isValid)) {
    alert("Signup Successful!!");
  } else {
    alert("Error: Please fill the correct data and try again.");
  }
});
