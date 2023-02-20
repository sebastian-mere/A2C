const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Obtener el formulario
const form = document.querySelector("form");

// Agregar el evento "submit" al formulario
form.addEventListener("submit", (event) => {
  // Obtener los valores de los campos
  const nombre = document.getElementById("nombre").value;
  const empresa = document.getElementById("empresa").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const pais = document.getElementById("pais").value;
  const interes = document.getElementById("interes").value;
  const comentarios = document.getElementById("comentarios").value;

  // Validar el campo nombre
  if (!nombre) {
    event.preventDefault();
    document.getElementById("msgNombre").textContent = "El nombre es requerido";
  } else {
    document.getElementById("msgNombre").textContent = "";
  }

  // Validar el campo empresa
  if (!empresa) {
    event.preventDefault();
    document.getElementById("msgEmpresa").textContent =
      "La empresa es requerida";
  } else {
    document.getElementById("msgEmpresa").textContent = "";
  }

  // Validar el campo email
  if (!email) {
    event.preventDefault();
    document.getElementById("msgEmail").textContent = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    event.preventDefault();
    document.getElementById("msgEmail").textContent = "Ingrese un email válido";
  } else {
    document.getElementById("msgEmail").textContent = "";
  }

  // Validar el campo telefono
  if (!telefono) {
    event.preventDefault();
    document.getElementById("msgTelefono").textContent =
      "El teléfono es requerido";
  } else if (isNaN(telefono)) {
    event.preventDefault();
    document.getElementById("msgTelefono").textContent =
      "Ingrese un número de teléfono válido";
  } else {
    document.getElementById("msgTelefono").textContent = "";
  }

  // Validar el campo pais
  if (!pais) {
    event.preventDefault();
    document.getElementById("msgPais").textContent = "El país es requerido";
  } else {
    document.getElementById("msgPais").textContent = "";
  }

  // Validar el campo interes
  if (!interes) {
    event.preventDefault();
    document.getElementById("msgInteres").textContent =
      "El interés es requerido";
  } else {
    document.getElementById("msgInteres").textContent = "";
  }

  // Validar el campo comentarios
  if (!comentarios) {
    event.preventDefault();
    document.getElementById("msgComentarios").textContent =
      "Los comentarios son requeridos";
  } else {
    document.getElementById("msgComentarios").textContent = "";
  }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var windowHeight = window.innerHeight;
  var fullHeight = document.body.offsetHeight;
  var scrolled = window.scrollY;
  if (scrolled > (0.50 * (fullHeight - windowHeight))) {
    document.getElementById("btn-subir").style.display = "block";
    document.getElementById("btn-subir").classList.add("fade-in");
  } else {
    document.getElementById("btn-subir").style.display = "none";
    document.getElementById("btn-subir").classList.remove("fade-in");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}