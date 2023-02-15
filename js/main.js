const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", function () {
  nav.classList.toggle("open");
});

const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

punto.forEach((Punto, i) => {
  punto[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * -33.334;
    grande.style.transform = `translateX(${operacion}%)`;
    punto.forEach((Punto, i) => {
      punto[i].classList.remove("activo");
    });
    punto[i].classList.add("activo");
  });
});

const grandeRob = document.querySelector(".grandeRob");
const puntoRob = document.querySelectorAll(".puntoRob");

puntoRob.forEach((Punto2, i) => {
  puntoRob[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * -33.334;
    grandeRob.style.transform = `translateX(${operacion}%)`;
    puntoRob.forEach((Punto2, i) => {
      puntoRob[i].classList.remove("activo");
    });
    puntoRob[i].classList.add("activo");
  });
});

window.addEventListener("scroll", function () {
  var video = document.getElementById("video");
  var position = video.getBoundingClientRect();

  if (
    position.top >= 0 &&
    position.bottom <= window.innerHeight &&
    position.left >= 0 &&
    position.right <= window.innerWidth
  ) {
    video.play();
  }
});
