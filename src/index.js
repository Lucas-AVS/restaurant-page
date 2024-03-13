import "./styles/global.css";

import firstLoad from "./functions/firstLoad.js";
import changePage from "./functions/changePage.js";
import resetPage from "./functions/resetPage.js";

firstLoad();

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const menu = document.querySelector(".menu");

function handleChangePage(page) {
  return function () {
    resetPage();
    changePage(page);

    // Remover 'selected' from all
    home.removeAttribute("selected");
    about.removeAttribute("selected");
    menu.removeAttribute("selected");
    // Add 'selected' to clicked value
    this.setAttribute("selected", true);
  };
}

home.addEventListener("click", handleChangePage("home"));
about.addEventListener("click", handleChangePage("about"));
menu.addEventListener("click", handleChangePage("menu"));
