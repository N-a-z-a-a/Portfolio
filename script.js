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

const skills = document.querySelectorAll(".skill");

for (let skill of skills) {
  skill.addEventListener("mouseover", (e) => {
    e.currentTarget.lastChild.previousSibling.innerText = "- Discuss Now -";
  });
  skill.addEventListener("mouseout", (e) => {
    e.currentTarget.lastChild.previousSibling.innerText = "--";
  });
}
