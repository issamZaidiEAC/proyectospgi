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


//INTERACCION BOTON LUPA 
const modal = document.getElementById("modalwrapper")
const botonLupa = document.getElementById("lupa");
const cerrarBuscar = document.getElementById("cerrarbuscar")
const buscar = document.getElementById("buscar");
const tagPanel = document.getElementById("tagPanel");

// botonLupa.addEventListener("click", function (){
//     modal.style.display = "flex;"
//     buscar.style.top = "0px";
//     tagPanel.style.display = "flex";
// })

// cerrarBuscar.addEventListener("click", function(){
//     buscar.style.top = "-1000px";
//     tagPanel.style.display = "none"
// })

//INTERACCION BUSQUEDA (BLOQUEO DE SCROLL)


// if (modal.style.display = "flex") {
//     document.body.style.overflow = "hidden";
// } else {
//     document.body.style.overflow = "auto";
// }


