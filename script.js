let textBox = document.querySelector(".text-show-box");

function remove() {
  textBox.remove();
}

function addShadow(element) {
  element.classList.add("shadow");
}

function removeShadow(element) {
  element.classList.remove("shadow");
}
