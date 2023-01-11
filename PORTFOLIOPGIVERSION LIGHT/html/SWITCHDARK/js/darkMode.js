const caja = document.querySelector(".checkbox");
const target = document.querySelector(".label");
const bola = document.querySelector(".ball")

caja.addEventListener("click", function(){
    if (target.classList.contains("darkcheckbox") === false){
        target.classList.add("darkcheckbox");
        bola.classList.remove("ballLight")
        bola.classList.add("ballDark")
    } else {
        target.classList.remove("darkcheckbox");
        bola.classList.remove("ballDark")
        bola.classList.add("ballLight")
    }
});

