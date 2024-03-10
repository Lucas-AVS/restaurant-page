export default function header() {
  let div = document.createElement("header");
  div.innerHTML = "<p>This is a header</p>";
  document.body.appendChild(div);
}
