// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const input = document.querySelector("#amigo");
const listaAmigosHTML = document.querySelector("#listaAmigos");
const ganadorContenedor = document.querySelector("#resultado");
const listaAmigos = new Set();

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    agregarAmigo();
    resetearInput(input);
  }
});

const agregarAmigo = () => {
  const amigo = input.value.trim();
  if (!amigo) alert("Debes ingresar un nombre");
  const elemento = crearElementoHTML("li", amigo);
  if (listaAmigos.has(formatearString(elemento.textContent))) {
    alert("El amigo ya se encuentra en la lista");
    return;
  } else {
    listaAmigosHTML.appendChild(elemento);
    listaAmigos.add(formatearString(elemento.textContent));
  }
  resetearInput(input);
};

const sortearAmigo = () => {
  const ganadorIndice = generarNumeroAleatorio(0, listaAmigos.size - 1);
  const ganador = [...listaAmigos][ganadorIndice];
  mostrarGanador(ganador, ganadorContenedor);
  resetearAmigos(listaAmigosHTML, listaAmigos);
  resetearInput(input);
};

// utils
const resetearInput = (input) => (input.value = "");

const crearElementoHTML = (elemento, texto) => {
  const el = document.createElement(elemento);
  el.textContent = texto;
  return el;
};

const generarNumeroAleatorio = (minimo, maximo) =>
  Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

const formatearString = (string) => string.trim().toLowerCase();

const resetearAmigos = (listaAmigosHTML, listaAmigos) => {
  listaAmigosHTML.innerHTML = "";
  listaAmigos.clear();
};

const mostrarGanador = (ganador, ganadorContenedor) => {
  ganadorContenedor.innerHTML = `<li>El amigo que debe comprar el regalo es: ${ganador}</li>`;

  setTimeout(() => {
    ganadorContenedor.innerHTML = "";
  }, 3000);
};