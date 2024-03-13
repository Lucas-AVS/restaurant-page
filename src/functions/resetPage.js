import { set } from "lodash";

export default function resetPage() {
  const content = document.querySelector(".content");
  content.style = "";
  while (content.children.length > 1) {
    content.children[1].remove();
  }
}
