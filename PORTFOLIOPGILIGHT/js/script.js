import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth/2, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    (window.innerWidth/2) / window.innerHeight,
    0.1,
    1000
);

renderer.setClearColor(0xAEECEF);

const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(270, 150, 270);
orbit.update();

const luzAmbiental = new THREE.AmbientLight(0xfceabb);
scene.add(luzAmbiental);

const luzDir = new THREE.DirectionalLight(0xF96E46, 1);
scene.add(luzDir);
luzDir.position.set(100, 11, 70)

const gltfLoader = new GLTFLoader();

const rgbeLoader = new RGBELoader();

let room;
gltfLoader.load('./assets/scene.gltf', function(gltf) {
    const model = gltf.scene;
    scene.add(model);
    room = model;
});

function animate (time) {
    if (room) 
        room.rotation.y += 0.001
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth/2 / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth/2, window.innerHeight);
})


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

