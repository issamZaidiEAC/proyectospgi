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

const modalImgWrapper = document.getElementById("imgs");

const toLeft = document.getElementById("izquierda");
const toRight = document.getElementById("derecha");

let imgIndex = 0;
const imgs = ["url(../img/modal1.png)", "url(../img/modal2.png)", "url(../img/modal3.png)"];

toLeft.addEventListener("click", function(){
    if (imgIndex == 0) {
        imgIndex = 2;
    } else {
        imgIndex--;
    }
    modalImgWrapper.style.backgroundImage = imgs[imgIndex];
})

toRight.addEventListener("click", function(){
    if (imgIndex == 2) {
        imgIndex = 0;
    } else {
        imgIndex++;
    }
    modalImgWrapper.style.backgroundImage = imgs[imgIndex];
})
