//INTERACCIONES

//ABRIR/CERRAR MENU 
const burger = document.getElementById("burger");
const cerrar = document.getElementById("cerrarMenu")
const menu = document.getElementById("menu");

burger.addEventListener('click', function(){
    menu.style.right = "0px";
})

cerrar.addEventListener('click', function(){
    menu.style.right = "-1000px"
})