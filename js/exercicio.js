const item = document.querySelectorAll(".item");
const cores = document.querySelector(".cores");

cores.addEventListener("click", () => {
  for (itens of item) {
    itens.classList.toggle("show");
  }
});

console.log(item);
