import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
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
  DirectionalLight,
  AmbientLight,
  MOUSE,
  Clock
} from "three";

import CameraControls from 'camera-controls';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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

// The scene
const scene = new Scene();

// The Camera

const camera = new PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight
);
scene.add(camera);

// The Renderer

const renderer = new WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

window.addEventListener("resize", () => {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
});

// Lights

const light = new DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 0.5);
const baseLight = new AmbientLight(0xffffff, 1);
scene.add(light, baseLight);

// Controls

CameraControls.install( { THREE: subsetOfTHREE } ); 
const clock = new Clock();
const cameraControls = new CameraControls(camera, canvas);

cameraControls.setLookAt(15, 15, 15, 0, 10, 0);

function animate() {
  const delta = clock.getDelta();
	cameraControls.update( delta );
	renderer.render( scene, camera );
  requestAnimationFrame(animate);
}

animate();

// Load 3D scan

const loader = new GLTFLoader();

const loadingElem = document.querySelector('#loader-container');
const loadingText = loadingElem.querySelector('p');

loader.load(
	// resource URL
	'../../../GLTF/police_station.glb',
	// called when the resource is loaded
	( gltf ) => {

    loadingElem.style.display = 'none';
		scene.add( gltf.scene );

	},
	// called while loading is progressing
	( progress ) => {
    const current = (progress.loaded /  progress.total) * 100;
    const formatted = Math.trunc(current * 100) / 100; 
    loadingText.textContent = `Loading: ${formatted}%`;
	},
	// called when loading has errors
	( error ) => {

		console.log( 'An error happened: ', error );

	}
);