const sidebar = document.querySelector(".sidebarClose");
const icons = document.querySelector(".iconsNone");
const user = document.querySelector(".userNone");
const input = document.querySelector(".inputNone");

function toggleMenu() {
  sidebar.classList.toggle("sidebarOpen");
  icons.classList.toggle("icons");
  user.classList.toggle("user");
  input.classList.toggle("input");
  document.querySelectorAll(".textNone").forEach((elemento) => {
    elemento.classList.toggle("textOpen");
  });
  console.log("clicado");
}
