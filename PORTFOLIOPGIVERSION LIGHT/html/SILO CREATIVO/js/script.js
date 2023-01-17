// const botonMenu = document.getElementById("burguer");

// console.log(botonMenu);

// const botonBuscar = document.getElementById("search");

// botonBuscar.addEventListener("click",
// function() {
//     alert("HOLA, TU BOTON DE BUSQUEDA FUNCIONA")
// });

// const navMenu = document.getElementById("navMenu");

// navMenu.classList.add("mostrar");

// console.log(navMenu.classList);

// botonMenu.addEventListener("click", 
// function() {
//     alert("HOLA, TU EVENTLISTENERFUNCIONA HAMIJO");
//     if (navMenu.classList.contains("mostrar") == true) {
//         navMenu.classList.remove("ocultar");
//         navMenu.classListe.add("mostrar");
//     }
// });

// const imagen = document.getElementById("logo");

// const imagenSrc = imagen.getAttribute("src");

// console.log(imagenSrc);

// imagen.addEventListener("click", function(){
//     if (imagen.getAttribute("src") === "src/silo-creativo.webp") {
//         imagen.removeAttribute("src");
//         imagen.setAttribute("src", "src/logo-google.png");
//     }
// });

//INTERACCION MENU HAMBURGUESA

const botonMenu = document.getElementById("abrirMenu");
const navMenu = document.getElementById("navMenu");

console.log(navMenu.style);

botonMenu.addEventListener("click", function(){
    if(navMenu.style.display = "none") {
        navMenu.style.display = "block";
    } else {
        navMenu.style.removeProperty("display");
        navMenu.style.setProperty("display", "none");
    }
})


//INTERACCION BOTON LUPA //INTERACCION BUSQUEDA (BLOQUEO DE SCROLL)
const modal = document.getElementById("modal");
const botonLupa = document.getElementById('lupa');
const cerrarBuscar = document.getElementById("cerrarbuscar")
const buscar = document.getElementById("buscar");
const tagPanel = document.getElementById("tagPanel");

botonLupa.addEventListener("click", function (){
    modal.style.display = "flex";
    modal.style.opacity = "100%";
    buscar.style.top = "0";
    tagPanel.style.display = "flex";
    document.body.style.overflowY = "hidden";
})

cerrarBuscar.addEventListener("click", function(){
    buscar.style.top = "-1000px";
    modal.style.display = "none";
    modal.style.opacity = "0%";
    tagPanel.style.display = "none";
    document.body.style.overflowY = "overlay";
})

//INTERACCION DEL HEADER ACTIVADA MEDIANTE SCROLL

//CHIVATO DE SCROLL

// window.onscroll=function(){
//     console.log( 
//       'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' +
//       'left: ' + (window.pageXOffset || document.documentElement.scrollLeft)
//     );
// }

const header = document.getElementById("header");

const logo = document.getElementById("logo");

const menuNav = document.querySelectorAll("menuNav");

let scrollY = 0;

function scrollYLogger(){
    scrollY = window.pageYOffset || document.documentElement.scrollTop;

    console.log('Scroll Y:'+scrollY)
}

window.addEventListener("scroll", scrollYLogger);

window.addEventListener("scroll", function(){
    if (scrollY > 50){
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.height = "10vh";
        header.style.backgroundColor = "#B92326";
        //logo.setAttribute("src", "../src/silo-mini.webp");
        logo.src = "src/silo-creativo-scroll.webp";
        
        menuNav.style.filter = "invert(100%)"
        menuNav.style.backgroundColor = "B92326"
    } else {
        header.style.position = "static";
        header.style.top = "0";
        header.style.backgroundColor = "#f7f5ef";
        logo.src = "src/silo-creativo.webp";
    }; 
});