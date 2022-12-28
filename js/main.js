const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (event) => {
    manipulaDados(event.target.textContent, event.target.parentNode);
  });
});

const manipulaDados = (operacao, controle) => {
  const peca = controle.querySelector(".controle-contador");

  if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  } else {
    if (peca.value <= 0) {
      peca.value == 0;
    } else {
      peca.value = parseInt(peca.value) - 1;
    }
  }
};
