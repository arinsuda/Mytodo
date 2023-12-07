const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];

document.addEventListener("load", () => {
  const storedColor = localStorage.getItem("yourBgColor");
  setBodyColor(storedColor || colorArray[0]);
});

function setBodyColor(color) {
  const SectionColor = document.getElementById("rainbow");
  SectionColor.style.backgroundColor = color;
  localStorage.setItem("yourBgColor", color);
}

const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
  const e = document.getElementById("Rainbow");
  const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  setBodyColor(randomColor);
});

const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
  const inputElement = document.getElementById("addItem");
  const errorElement = document.querySelector("#backpack .error");
  const ulElement = document.querySelector("#listItem ul");

  if (inputElement.value == "") {
    errorElement.textContent = "Please enter an item to continue!";
    return;
  }
  errorElement.textContent = "";
  const newLiElement = document.createElement("li");
  newLiElement.textContent = inputElement.value;
  ulElement.appendChild(newLiElement);

  localStorage.setItem('item', inputElement.value)
  inputElement.value = "";
});

const subbtn = document.getElementById("submit-btn");
subbtn.addEventListener('click', () => {
    const inputUsername = document.getElementById('Username');
    const inputEmail = document.getElementById('Email');
    const inputPassword = document.getElementById('Password');
    const errorElement = document.querySelector('#formValidator .valid');

    const usernameValue = inputUsername.value;
    const regex = /^(?=.*[A-Z])(?=.*\d)\S*$/;
    const isUsernameValid = regex.test(usernameValue);

    const emailValue = inputEmail.value
    const emailRegex = /@.*\.com$/;
    const isEmailValid = emailRegex.test(emailValue);

    const passwordValue = inputPassword.value;
    const passwordRegex = /(?=.*\d)/
    const isPasswordValid = passwordRegex.test(passwordValue);

    if (isUsernameValid && isEmailValid && isPasswordValid) {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

        storedUsers[usernameValue] = {
            email: emailValue,
            password: passwordValue
        };

        localStorage.setItem('user' , JSON.stringify(storedUsers));
        showSuccess("Successfully!");
    } else {
        Validation(isUsernameValid, isEmailValid, isPasswordValid, errorElement);
    }
});
function Validation(isUsernameValid, isEmailValid, isPasswordValid, errorElement) {
    if (!isUsernameValid) {
        showError("Username is Invalid. Make sure to contain uppercase, number, and not special character", errorElement);
        return;
    }
    if (!isEmailValid) {
        showError("This is not a Email format!!! Contain @ and .com", errorElement);
        return;
    }
    if (!isPasswordValid) {
        showError("Password is Invalid. Make sure to contain uppercase, lowercase, number and special character", errorElement);
        return;
    }
    errorElement.textContent = "";
}
function showSuccess(successMessage) {
    const successElement = document.querySelector('#formValidator .valid');
    successElement.textContent = successMessage;
}

function showError(errorMessage, errorElement) {
    errorElement.textContent = errorMessage;
}

let currentBg = null
window.addEventListener("load", () => {
    currentBg = localStorage.getItem("yourBgColor");
    setBodyStyle();
  });

  function setBodyStyle() {
    document.body.style = `background-color:${currentBg}`;
  }

  const colorInput = document.getElementById("color-bg");
colorInput.addEventListener("input", (e) => {
  currentBg = e.target.value;
  localStorage.setItem("yourBgColor", e.target.value);
  setBodyStyle();
});
