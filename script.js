let textBox = document.querySelector(".text-show-box");
let numInElement = 0; // predefined number of like in like btn

function remove() {
  textBox.remove();
}

function addShadow(element) {
  element.classList.add("shadow");
}

function removeShadow(element) {
  element.classList.remove("shadow");
}

function addLike(element) {
  numInElement = Number(element.innerText.replace(/\D/g, "")) + 1; // extract number from string
  element.innerText = `${numInElement} like(s)`;
}
