const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const isNotEmpty = (input) => input.length > 0;
const checkLength = (input, len) => input.length >= len;
const isEmailValid = (email) => emailRegex.test(email);
const isPwdValid = (pwd) => passwordRegex.test(pwd);
const isSame = (pwd, confirmPwd) => pwd === confirmPwd;
const isFormValid = (fromObj) =>
  Object.values(fromObj).every((value) => value === true);

const replaceClass = (id, remove, add) => {
  document.getElementById(id).classList.remove(remove);
  document.getElementById(id).classList.add(add);
};

const isValid = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  confirmPassword: false,
};
