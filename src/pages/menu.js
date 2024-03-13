import "../styles/menu.css";

export default function home() {
  const main = document.createElement("main");

  const pizzaContainer = document.createElement("div");
  const pizzaImgDiv = document.createElement("div");
  const pizzaTittle = document.createElement("p");
  const pizzaImg = document.createElement("img");
  pizzaImg.src = "/src/assets/pizza-photo.png";

  const pizzaDiv = document.createElement("div");
  const pizza1 = document.createElement("p");
  const pizza2 = document.createElement("p");
  const pizza3 = document.createElement("p");

  pizzaTittle.textContent = "Pizza";
  pizza1.innerHTML =
    "<span>Margherita Mushroom Pizza</span>: Portobello mushrooms as the crust, marinara sauce, mozzarella, grape tomatoes, fresh basil.";
  pizza2.innerHTML =
    "<span>Mushroom Special Pizza</span>: Pizza dough, crushed tomatoes, mozzarella, mushrooms, pepperoni, salami.";
  pizza3.innerHTML =
    "<span>Pepperoni Pizza</span>: Pizza crust, marinara sauce, mozzarella, mini pepperoni, cherry tomatoes.";

  pizzaImgDiv.className = "image-div";
  pizzaDiv.className = "text-div";

  pizzaDiv.appendChild(pizza1);
  pizzaDiv.appendChild(pizza2);
  pizzaDiv.appendChild(pizza3);

  pizzaImgDiv.appendChild(pizzaTittle);
  pizzaImgDiv.appendChild(pizzaImg);

  pizzaContainer.appendChild(pizzaImgDiv);
  pizzaContainer.appendChild(pizzaDiv);

  const barContainer = document.createElement("div");
  const barImgDiv = document.createElement("div");
  const barTittle = document.createElement("p");
  const barImg = document.createElement("img");
  barImg.src = "/src/assets/drink-photo.png";

  const drinkDiv = document.createElement("div");
  const drink1 = document.createElement("p");
  const drink2 = document.createElement("p");
  const drink3 = document.createElement("p");

  barTittle.textContent = "Bar";
  drink1.innerHTML =
    "<span>Vesper Martini</span>: Gin, vodka, dry vermouth, garnished with a lemon twist.";
  drink2.innerHTML =
    "<span>Irish Coffee</span>: Irish whiskey, hot brewed coffee, lightly whipped cream.";
  drink3.innerHTML =
    "<span>Special Cappuccino</span>: Espresso, steamed milk, frothed milk, dusted with cocoa or cinnamon.";

  main.className = "menu-main";
  barImgDiv.className = "image-div";
  drinkDiv.className = "text-div";

  drinkDiv.appendChild(drink1);
  drinkDiv.appendChild(drink2);
  drinkDiv.appendChild(drink3);

  barImgDiv.appendChild(barTittle);
  barImgDiv.appendChild(barImg);

  barContainer.appendChild(barImgDiv);
  barContainer.appendChild(drinkDiv);

  main.appendChild(pizzaContainer);
  main.appendChild(barContainer);

  const content = document.querySelector(".content");
  content.appendChild(main);
}
