const hamburger = document.getElementById("mobile-menu");
console.log(hamburger);
hamburger.addEventListener("click", function () {
  const mobileMenu = document.querySelector(".menu");
  mobileMenu.style.display = "block";
  console.log(mobileMenu);
});
