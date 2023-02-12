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
const error = document.querySelector(".error");
console.log(error);

nameField.addEventListener("input", (e) => {
  if (nameField.validity.valid) {
    error.textContent = "";
  } else {
    showError();
  }
});

function showError() {
  if (nameField.validity.valueMissing) {
    console.log(nameField.validity);
    error.textContent = "You need to enter your full name.";
  }
}

form.addEventListener("submit", (e) => {
  if (!nameField.validity.valid) {
    showError();
    preventDefault();
  }
});

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}
