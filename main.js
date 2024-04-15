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

// import * as THREE from 'three'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 500)
// camera.position.z = 5

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.setPixelRatio(2)
// document.body.appendChild(renderer.domElement)

// // const axes = new THREE.AxesHelper(2)
// // scene.add(axes)

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true
// controls.dampingFactor = 0.03
// controls.autoRotate = true
// controls.enablePan = false
// controls.enableZoom = false
// scene.add(controls)

// const sphereGeo = new THREE.SphereGeometry(0.75, 60, 60)
// const sphereMat = new THREE.MeshLambertMaterial({color: 0x00aaff})
// const sphere = new THREE.Mesh(sphereGeo, sphereMat)
// scene.add(sphere)

// const spotLight = new THREE.SpotLight(0xffffff, 1)
// spotLight.position.y = 5
// spotLight.position.z = 5
// scene.add(spotLight)

// // const spotHelper = new THREE.SpotLightHelper(spotLight)
// // scene.add(spotHelper)

// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth/window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
// })

// let clock = new THREE.Clock()
// function animate() {
//     controls.update()
//     requestAnimationFrame(animate)
//     renderer.render(scene, camera)
// }

// animate()