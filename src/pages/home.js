import "../styles/home.css";
import barImg from "../assets/bar-entrance.png";

export default function home() {
  const main = document.createElement("main");
  const ImgDiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = barImg;
  const address = document.createElement("p");
  const TextDiv = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  address.textContent = "123 Neon Lane, Lumina City.";
  p1.textContent =
    "The Capybara brothers, renowned for their quirky creativity, have woven enchantment into every corner of CaPizzaBar. ";
  p2.textContent =
    "Step into CaPizzaBar, a neon-lit oasis crafted by the imaginative Capybara brothers. Their pizzas are an art form—crispy crusts, magical toppings, and cheese that sings. Pair your slice with signature cocktails that glow under blacklight.";

  ImgDiv.className = "image-div";
  TextDiv.className = "text-div";
  main.className = "home-main";

  TextDiv.appendChild(p1);
  TextDiv.appendChild(p2);

  ImgDiv.appendChild(img);
  ImgDiv.appendChild(address);

  main.appendChild(ImgDiv);
  main.appendChild(TextDiv);

  const content = document.querySelector(".content");
  content.appendChild(main);
}
