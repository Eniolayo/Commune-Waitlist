const navigation = document.querySelector("nav ul");
const burger = document.querySelector("nav img");
burger.addEventListener("click", () => {
  navigation.classList.toggle("show-face");
});
