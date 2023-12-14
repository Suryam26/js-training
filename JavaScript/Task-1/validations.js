const validateFirstName = () => {
  const firstName = document.getElementById("first-name").value;
  if (!isNotEmpty(firstName)) {
    document.getElementById("first-name-msg").innerText =
      "First Name can't be empty.";
    replaceClass("first-name-msg", "text-green-600", "text-red-600");
    isValid.firstName = false;
  } else {
    document.getElementById("first-name-msg").innerText = "Valid First Name.";
    replaceClass("first-name-msg", "text-red-600", "text-green-600");
    isValid.firstName = true;
  }
};

const validateLastName = () => {
  const lastName = document.getElementById("last-name").value;
  if (!isNotEmpty(lastName)) {
    document.getElementById("last-name-msg").innerText =
      "Last Name can't be empty.";
    replaceClass("last-name-msg", "text-green-600", "text-red-600");
    isValid.lastName = false;
  } else {
    document.getElementById("last-name-msg").innerText = "Valid Last Name.";
    replaceClass("last-name-msg", "text-red-600", "text-green-600");
    isValid.lastName = true;
  }
};

const validateEmail = () => {
  const email = document.getElementById("email").value;
  if (!isNotEmpty(email) || !isEmailValid(email)) {
    document.getElementById("email-msg").innerText = "Invalid Email.";
    replaceClass("email-msg", "text-green-600", "text-red-600");
    isValid.email = false;
  } else {
    document.getElementById("email-msg").innerText = "Valid Email.";
    replaceClass("email-msg", "text-red-600", "text-green-600");
    isValid.email = true;
  }
};

const validatePassword = () => {
  const pwd = document.getElementById("password").value;
  if (!checkLength(pwd, 8) || !isPwdValid(pwd)) {
    document.getElementById("password-msg").innerText = "Weak Password.";
    replaceClass("password-msg", "text-green-600", "text-red-600");
    isValid.password = false;
  } else {
    document.getElementById("password-msg").innerText = "Strong Password.";
    replaceClass("password-msg", "text-red-600", "text-green-600");
    isValid.password = true;
  }
  validateConfirmPassword();
};

const validateConfirmPassword = () => {
  const pwd = document.getElementById("password").value;
  const confirmPwd = document.getElementById("confirm-password").value;
  if (!isNotEmpty(confirmPwd) || !isSame(pwd, confirmPwd)) {
    document.getElementById("confirm-password-msg").innerText =
      "Password did not match.";
    replaceClass("confirm-password-msg", "text-green-600", "text-red-600");
    isValid.confirmPassword = false;
  } else if (!checkLength(confirmPwd, 8) || !isPwdValid(confirmPwd)) {
    document.getElementById("confirm-password-msg").innerText =
      "Weak Password.";
    replaceClass("confirm-password-msg", "text-green-600", "text-red-600");
    isValid.confirmPassword = false;
  } else {
    document.getElementById("confirm-password-msg").innerText =
      "Password Match.";
    replaceClass("confirm-password-msg", "text-red-600", "text-green-600");
    isValid.confirmPassword = true;
  }
};
