//INTERACCION MENU HAMBURGUESA

const burguer = document.getElementById("burguer")
const navMenu = document.getElementById("nav")

burguer.addEventListener("click", function() {
    if (navMenu.classList.contains("mostrar") ===  false) {
        navMenu.classList.add("mostrar");
    } else {
        navMenu.classList.remove("mostrar")
    }
})

//INTERACCION BOTON DE BUSQUEDA

const botonSearch = document.getElementById("searchMovil");
const search = document.getElementById("search");

botonSearch.addEventListener("click", function() {
    if (search.classList.contains("mostrar") === false) {
        search.classList.add("mostrar");
    }
    else {
        search.classList.remove("mostrar");;
    }
})