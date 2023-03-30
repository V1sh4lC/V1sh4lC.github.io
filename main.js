import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


//resize update
const  sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}
//scene
const scene = new THREE.Scene();
//camera
const camera = new THREE.PerspectiveCamera(70, sizes.width/sizes.height, 0.1, 100);
camera.position.z = 10;

//object
//  geo and mat
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshBasicMaterial({
    color: "#0083ff",
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
document.body.appendChild( renderer.domElement );

//render loop
function animate() {
    requestAnimationFrame( animate );
    renderer.render(scene, camera);
}

animate();