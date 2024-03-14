import "../styles/header.css";

export default function createHeader() {
  const header = document.createElement("header");
  const div = document.createElement("div");
  div.className = "container";
  const img = document.createElement("img");
  img.src = "../assets/capizzabar-logo.png";

  const ul = document.createElement("ul");

  const homeLi = document.createElement("li");
  homeLi.className = "home";
  homeLi.textContent = "home";
  homeLi.setAttribute("selected", true);
  const menuLi = document.createElement("li");
  menuLi.className = "menu";
  menuLi.textContent = "menu";
  const aboutLi = document.createElement("li");
  aboutLi.className = "about";
  aboutLi.textContent = "about";

  ul.appendChild(homeLi);
  ul.appendChild(menuLi);
  ul.appendChild(aboutLi);

  div.appendChild(img);
  div.appendChild(ul);

  header.appendChild(div);

  const content = document.querySelector(".content");
  content.appendChild(header);
}
