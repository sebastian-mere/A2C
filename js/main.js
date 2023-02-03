const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", function () {
  nav.classList.toggle("open");
});

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{
        let posicion  = i
        let operacion = posicion * -33.334
        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
