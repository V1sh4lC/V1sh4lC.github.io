import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, sizes.width/sizes.height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

const geo = new THREE.SphereGeometry(3, 64, 64);
const mat = new THREE.MeshStandardMaterial( {
    color: 0x0083ff,
} )
const sphere = new THREE.Mesh(geo, mat);
scene.add(sphere);

camera.position.z = 20;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    //update camera
    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix();
    //update renderer
    renderer.setSize(sizes.width, sizes.height);
})

function loop() {
    controls.update();
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
}

loop();