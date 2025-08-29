
const btnAlterar = document.querySelector("#btn-alterar");
btnAlterar.addEventListener("click", () => {
    const input = document.querySelector("#novo-texto");
    const p = document.querySelector("#paragrafo");
    p.textContent = input.value;
    input.value = "";
});


const btnAdd = document.querySelector("#btn-item");
btnAdd.addEventListener("click", () => {
    const input = document.querySelector("#novo-item");
    const ul = document.querySelector("#lista");
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
});


const btndireita = document.querySelector("#btndireita");
const btnesquerda  = document.querySelector("#btnesquerda");
const selecionadostate = "selecionado";
const imagens = document.querySelectorAll(".galeria img");

let indice = 0;

function selecionar(indiceNovo) {
  const atual = document.querySelector(".galeria img." + selecionadostate);
  if (atual && atual.classList.contains(selecionadostate)) {
    atual.classList.remove(selecionadostate);
  }

  const proxima = imagens[indiceNovo];
  if (!proxima.classList.contains(selecionadostate)) {
    proxima.classList.add(selecionadostate);
  }
}

btndireita.addEventListener("click", () => {

  indice = indice + 1;
  if (indice >= imagens.length) {
    indice = 0;
  }
  selecionar(indice);
});

btnesquerda.addEventListener("click", () => {
  indice = indice - 1;
  if (indice < 0) {
    indice = imagens.length - 1;
  }
  selecionar(indice);
});

selecionar(indice);

