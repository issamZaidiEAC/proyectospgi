const corazoncito = document.getElementById("emptylike");

const corazonSrc = corazoncito.getAttribute("src");

console.log(corazoncito, corazonSrc);

corazoncito.addEventListener("click", function() {
    corazoncito.removeAttribute("src");
    corazoncito.setAttribute("src", "src/me-gusta.png")
})