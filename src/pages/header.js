import "../styles/header.css";

export default function createHeader() {
  const header = document.createElement("header");
  const div = document.createElement("div");
  div.className = "container";
  const img = document.createElement("img");
  img.src = "/src/assets/capizzabar-logo.png";

  const ul = document.createElement("ul");

  const homeLi = document.createElement("li");
  homeLi.textContent = "HOME";
  const menuLi = document.createElement("li");
  menuLi.textContent = "MENU";
  const aboutLi = document.createElement("li");
  aboutLi.textContent = "ABOUT";

  ul.appendChild(homeLi);
  ul.appendChild(menuLi);
  ul.appendChild(aboutLi);

  div.appendChild(img);
  div.appendChild(ul);

  header.appendChild(div);

  document.body.appendChild(header);
}
