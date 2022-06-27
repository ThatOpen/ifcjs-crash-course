import {
  Scene,
  BoxGeometry,
  MeshPhongMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  Raycaster,
  MathUtils,
  MOUSE,
  Clock
} from "three";

import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import gsap from "gsap";


import CameraControls from 'camera-controls';
import { AxesHelper } from "three";
import { GridHelper } from "three";
import { DirectionalLight } from "three";
import { AmbientLight } from "three";

const subsetOfTHREE = {
  MOUSE,
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  Raycaster,
  MathUtils: {
    DEG2RAD: MathUtils.DEG2RAD,
    clamp: MathUtils.clamp
  }
};


const canvas = document.getElementById("three-canvas");

//1 The scene
const scene = new Scene();
const axes = new AxesHelper();
const grid = new GridHelper();
scene.add(axes, grid);

//2 The Object
const geometry = new BoxGeometry(0.5, 0.5, 0.5);
const material = new MeshPhongMaterial({ color: "orange" });
const cubeMesh = new Mesh(geometry, material);
scene.add(cubeMesh);

//3 The Camera
const camera = new PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight
);
camera.position.x = 1; 
camera.position.y = 1; 
camera.position.z = 1; 
scene.add(camera);

//4 The Renderer
const renderer = new WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
renderer.setClearColor(0xffffff);

//5 Lights
const light = new DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 0.5);
const baseLight = new AmbientLight(0xffffff, 1);
scene.add(light, baseLight);


//6 Controls

CameraControls.install( { THREE: subsetOfTHREE } ); 
const clock = new Clock();
const cameraControls = new CameraControls(camera, canvas);

//7 GUI

const gui = new GUI();

gui.add(cubeMesh.rotation, 'x').min(0).max(2 * Math.PI).step(Math.PI / 360).name('X-axis');
gui.add(cubeMesh.rotation, 'y').min(0).max(2 * Math.PI).step(Math.PI / 360).name('Y-axis');
gui.add(cubeMesh.rotation, 'z').min(0).max(2 * Math.PI).step(Math.PI / 360).name('Z-axis');

const colorParam = {
	color: 0xff0000	
}

gui.addColor(colorParam, 'color').onChange(() => {
	cubeMesh.material.color.set(colorParam.color);
})

const functionParam = {
	spin: () => {
		gsap.to(cubeMesh.rotation, { y: cubeMesh.rotation.y +10, duration: 1 });
	}
}

gui.add(functionParam, 'spin');

// Events and animation

window.addEventListener("resize", () => {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
});

function animate() {
  const delta = clock.getDelta();
	cameraControls.update( delta );
	renderer.render( scene, camera );
  requestAnimationFrame(animate);
}

animate();
