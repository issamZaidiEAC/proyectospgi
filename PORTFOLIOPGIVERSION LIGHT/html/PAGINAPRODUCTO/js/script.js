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