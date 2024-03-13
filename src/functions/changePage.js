import home from "../pages/home";
import about from "../pages/about";
import menu from "../pages/menu";

export default function changePage(page) {
  if (page === "home") {
    home();
  } else if (page === "about") {
    about();
  } else if (page === "menu") {
    menu();
  } else {
    console.log(`error, ${page} is not an available page`);
  }
}
