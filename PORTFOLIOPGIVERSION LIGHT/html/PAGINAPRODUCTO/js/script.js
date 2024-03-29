//INTERACCION DRAG ITEM TO SCROLL

const wrapper = document.querySelector(".otherItems")
const gallery = document.getElementById("dragMenu");

let dragging = false, mouseLocation, galleryLocation;

const dragStart = e => {
    dragging = true;
    mouseLocation = e.pageX;
    galleryLocation = wrapper.scrollLeft;
}

const dragActive = e => {
    if(!dragging) return;

    let offset = e.pageX - mouseLocation;
    wrapper.scrollLeft = galleryLocation - offset;
}

const dragStop = e => {
    dragging = false;
    mouseLocation = e.pageX;
    galleryLocation = wrapper.scrollLeft;
}

gallery.addEventListener("mousedown", dragStart);
gallery.addEventListener("mousemove", dragActive);
gallery.addEventListener("mouseup", dragStop);

//INTERACCION CARRETE DE IMAGENES VENTANA MODAL

//PRIMERO TENEMOS QUE OBTENER EL OBJETO QUE TIENE LA PROPIEDAD BACKGROUND-IMAGE QUE VAMOS A MODIFICAR

const modalImgWrapper = document.getElementById("imgs");

//OBTENEMOS LOS BOTONES QUE TRIGGEAN EL CAMBIO DE VALOR DE LA PROPIEDAD

const toLeft = document.getElementById("izquierda");
const toRight = document.getElementById("derecha");

//DECLARAMOS TANTAS CONSTANTES COMO IMAGENES QUERAMOS MOSTRAR, EN ESTE CASO TRES, LES ASIGNAMOS COMO VALOR
//LA URL DE CADA IMAGEN

const bg1 = "url('./img/modal1.png')";
const bg2 = "url('./img/modal2.png')";
const bg3 = "url('./img/modal3.png')";

//DECLARAMOS UNA VARIABLE CUYO VALOR VA A SER UN ARRAY QUE CONTIENE LAS TRES VARIABLES DECLARADAS EN EL PASO PREVIOÇ
//Y UN CONTADOR QUE NOS AYUDA A RECORRER EL ARRAY

const imgs = [bg1, bg2, bg3];

let imgIndex = 0;

//A LOS BOTONES QUE VAN A ACTIVAR EL CAMBIO DE PROPIEDAD LES AÑADIMOS UN EVENT LISTENER QUE ESPERA UN CLICK DEL RATON
//EN EL CASO DEL BOTON toLeft, EL EVENT LISTENER PREGUNTARA SI EL VALOR DE INDEX ES IGUAL A 0(SE ESTA MOSTRANDO 
//LA PRIMERA IMAGEN O POSICION DEL ARRAY 0, EN CUYO CASO EL VALOR DE INDEX CAMBIARA A 2 (ULTIMA POSICION DEL ARRAY
//O ULTIMA IMAGEN) EN OTRO CASO, EL VALOR DE INDEX DECREMENTARA EN 1 Y SE MOSTRARA LA IMAGEN CON POSICION EN EL ARRAY 
//CORRESPONDIENTE A INDEX

//EN EL CASO DEL BOTON toLeft, EL EVENT LISTENER PREGUNTARA SI EL VALOR DE INDEX ES IGUAL A 2(SE ESTA MOSTRANDO 
//LA ULTIMA IMAGEN O POSICION DEL ARRAY 2, EN CUYO CASO EL VALOR DE INDEX CAMBIARA A 0 (PRIMERA POSICION DEL ARRAY
//O PRIMERA IMAGEN IMAGEN) EN OTRO CASO, EL VALOR DE INDEX AUMENTARA EN 1 Y SE MOSTRARA LA IMAGEN CON POSICION EN EL ARRAY 
//CORRESPONDIENTE A INDEX

//PARA MOSTRAR LA IMAGEN CON POSICION DE ARRAY CORRESPONDIENTE AL VALOR DE INDEX, EL EVENT LISTENER ACCEDERA A LA PROPIEDAD
//BACKGROUND-IMAGE DEL DIV EN CUESTION Y LE ASIGNARA COMO VALOR EL VALOR DE LA VARIABLE CON POSICION EN EL ARRAY CORRESPONDIENTE 
//A INDEX, EL CUAL ES UNA URL DE UNA IMAGEN (NOTA: EL CAMBIO SUAVIZADO ENTRE UNA IMAGEN Y OTRA SE CONSIGUE AÑADIENDO AL DIV 
//LA PROPIEDAD TRANSITION)

toLeft.addEventListener("click", function(){
    if (imgIndex == 0) {
        imgIndex = 2;
    } else {
        imgIndex -= 1;
    }
    modalImgWrapper.style.backgroundImage = imgs[imgIndex];
})


toRight.addEventListener("click", function(){
    if (imgIndex ==  2) {
        imgIndex = 0;
    } else {
        imgIndex += 1;
    }  
    modalImgWrapper.style.backgroundImage = imgs[imgIndex];
})


//INTERACCION CARRETE DE IMAGENES EN CARTA DE PRODUCTO

const cont1 = document.getElementById("img1");
const cont2 = document.getElementById("img2");
const cont3 = document.getElementById("img3");
const cont4 = document.getElementById("img4");

console.log(cont1);

const img1 = "url('./img/pokemonAmarillo.webp')";
const img2 = "url('./img/pika.jpg')";
const img3 = "url('./img/pika2.jpg')";
const img4 = "url('./img/pika3.jpg')";

let selectedImage = [false, false, false]

cont2.addEventListener("click", function(){
    if(!selectedImage[0]){
        cont1.style.backgroundImage = img2;
        cont2.style.opacity = "50%";
        selectedImage[0] = true;
    } else {
        cont1.style.backgroundImage = img1;
        cont2.style.opacity = "100%";
        selectedImage[0] = false;
    }
})

cont3.addEventListener("click", function(){
    if(!selectedImage[1]){
        cont1.style.backgroundImage = img3;
        cont3.style.opacity = "50%";
        selectedImage[1] = true;
    } else {
        cont1.style.backgroundImage = img1;
        cont3.style.opacity = "100%";
        selectedImage[1] = false;
    }
})

cont4.addEventListener("click", function(){
    if(!selectedImage[2]){
        cont1.style.backgroundImage = img4;
        cont4.style.opacity = "50%";
        selectedImage[2] = true;
    } else {
        cont1.style.backgroundImage = img1;
        cont4.style.opacity = "100%";
        selectedImage[2] = false;
    }
})