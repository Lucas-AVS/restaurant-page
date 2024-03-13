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
  };
}

home.addEventListener("click", handleChangePage("home"));
about.addEventListener("click", handleChangePage("about"));
menu.addEventListener("click", handleChangePage("menu"));
