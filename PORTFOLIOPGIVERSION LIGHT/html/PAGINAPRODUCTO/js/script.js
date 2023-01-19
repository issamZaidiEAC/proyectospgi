//INTERACCION DRAG ITEM TO SCROLL

const wrapper = document.querySelector(".otherItems")
const gallery = document.getElementById("dragMenu");

console.log(wrapper, gallery);

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
    if (imgIndex == 2) {
        imgIndex = 0;
    } else {
        imgIndex += 1;
    }  
    modalImgWrapper.style.backgroundImage = imgs[imgIndex];
})
