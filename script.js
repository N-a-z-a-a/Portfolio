const hamburger = document.getElementById("mobile-menu");
const mobileMenu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("show");
});

const menuItems = document.querySelectorAll(".menu-items");
for (let menu of menuItems) {
  menu.addEventListener("click", function () {
    if (mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show");
    }
  });
}

window.onclick = function (e) {
  if (!e.target.matches(".hamburger") && !e.target.matches(".menu-list")) {
    const parentDiv = document.getElementsByClassName("menu");
    for (let i = 0; i < parentDiv.length; i++) {
      const items = parentDiv[i];
      if (items.classList.contains("show")) {
        items.classList.remove("show");
      }
    }
  }
};

const form = document.getElementById("form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");

nameField.addEventListener("input", () => {
  if (nameField.validity.valid) {
    nameError.textContent = "";
  } else {
    showNameError();
  }
});

emailField.addEventListener("input", () => {
  if (emailError.validity.valid) {
    emailError.textContent = "";
  } else {
    showError();
  }
});

messageField.addEventListener("input", () => {
  if (messageField.validity.valid) {
    messageError.textContent = "";
  } else {
    showNameError();
  }
});

function showNameError() {
  if (nameField.validity.valueMissing) {
    nameError.textContent = "You need to enter your full name.";
  }
}

function showEmailError() {
  if (emailField.validity.valueMissing) {
    emailError.textContent = "You need to enter your email address";
  } else if (emailField.validity.typeMismatch) {
    emailError.textContent = "Value entered has to be an email address";
  } else if (emailField.validity.tooShort) {
    emailError.textContent = `Email should be at least ${emailField.minLength} characters. You entered ${emailField.value.length}.`;
  }
}

function showMessageError() {
  if (messageField.validity.valueMissing) {
    messageError.textContent = "What is your enquiry?";
  }
}

form.addEventListener("submit", (e) => {
  if (!nameField.validity.valid) {
    showNameError();
    e.preventDefault();
  }
  if (!emailField.validity.valid) {
    showEmailError();
    e.preventDefault();
  }
  if (!messageField.validity.valid) {
    showMessageError();
    e.preventDefault();
  }
});
