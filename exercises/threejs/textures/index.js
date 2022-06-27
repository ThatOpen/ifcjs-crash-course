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
  MOUSE,
  Clock,
  MeshPhongMaterial,
  DirectionalLight,
  TextureLoader,
  LoadingManager
} from "three";

import CameraControls from 'camera-controls';

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

//2 The Object

const geometry = new BoxGeometry(0.5, 0.5, 0.5);

const loadingManager = new LoadingManager();
const loadingElem = document.querySelector('#loading');
const progressBar = loadingElem.querySelector('.progressbar');

const images = [];
for (let i = 0; i < 6; i++) {
	images.push(`https://picsum.photos/200/300?random=${i}`);
}

const textureLoader = new TextureLoader(loadingManager);
const materials = [
	new MeshBasicMaterial({ map: textureLoader.load(images[0]) }),
	new MeshBasicMaterial({ map: textureLoader.load(images[1]) }),
	new MeshBasicMaterial({ map: textureLoader.load(images[2]) }),
	new MeshBasicMaterial({ map: textureLoader.load(images[3]) }),
	new MeshBasicMaterial({ map: textureLoader.load(images[4]) }),
	new MeshBasicMaterial({ map: textureLoader.load(images[5]) }),
];

loadingManager.onLoad = () => {
	loadingElem.style.display = 'none';
	const cube = new Mesh(geometry, materials);
	scene.add(cube);
}

loadingManager.onProgress = (urlOfLastItemLoaded, itemsLoaded, itemsTotal) => {
	const progress = itemsLoaded / itemsTotal;
	progressBar.style.transform = `scaleX(${progress})`;
};

//3 The Camera
const camera = new PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight
);
camera.position.z = 3; // Z let's you move backwards and forwards. X is sideways, Y is upward and do
scene.add(camera);

//4 The Renderer
const renderer = new WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

window.addEventListener("resize", () => {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
});

// 5 The Lights
var light = new DirectionalLight( 0xffffff );
light.position.set( 0, 1, 1 ).normalize();
scene.add(light);

// 6 The Controls
CameraControls.install( { THREE: subsetOfTHREE } ); 
const clock = new Clock();
const cameraControls = new CameraControls(camera, canvas);

function animate() {
  const delta = clock.getDelta();
	cameraControls.update( delta );
	renderer.render( scene, camera );
  requestAnimationFrame(animate);
}

animate();
