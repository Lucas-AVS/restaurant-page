import "../styles/about.css";

export default function home() {
  const main = document.createElement("main");
  const ImgDiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = "/src/assets/capybara-brothers.png";
  const portrait = document.createElement("p");
  const TextDiv = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");

  portrait.textContent = "Pizzarella Capybara & Pizzarella Capybara";
  p1.textContent =
    "Cappuccino Capybara was a capybara with a curious mustache and bright eyes. He spent his days exploring coffee fields, studying beans, and learning the secrets of the barista craft. His dream? To create cocktails and alcoholic beverages that would make customers’ hearts dance with joy. He envisioned silky-smooth lattes, cappuccinos adorned with leaf patterns, and espresso shots that could awaken even the sleepiest forest elves.";
  p2.textContent =
    "Pizzarella Capybara, on the other hand, had a dusty snout and skillful paws. His nights were dedicated to rolling pizza dough, spreading tomato sauce, and layering magical cheeses. His pizzas were legendary! From classic Margheritas to extravagant truffle mushroom pizzas, Pizzarella Capybara knew that true magic lay in the perfect combination of ingredients.";
  p3.textContent =
    "One day, as Cappuccino Capybara adjusted coffee grinds and Pizzarella Capybara twirled pizza dough, their eyes met. It was as if the universe whispered, “You two are meant for something grand.” And so, they decided to combine their dreams. Together, they created CaPizzaBar, a place where the aromas of coffee and pizza intertwined in a celestial symphony.";

  main.className = "about-main";
  ImgDiv.className = "image-div";
  TextDiv.className = "text-div";

  TextDiv.appendChild(p1);
  TextDiv.appendChild(p2);
  TextDiv.appendChild(p3);

  ImgDiv.appendChild(img);
  ImgDiv.appendChild(portrait);

  main.appendChild(ImgDiv);
  main.appendChild(TextDiv);

  const content = document.querySelector(".content");
  content.appendChild(main);
}
