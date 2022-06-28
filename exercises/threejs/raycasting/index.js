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
  AxesHelper,
  GridHelper,
  DirectionalLight,
  AmbientLight,
  MeshLambertMaterial,
  Clock
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
const axes = new AxesHelper();
const grid = new GridHelper();
scene.add(axes, grid);

//2 The Object
const geometry = new BoxGeometry(0.5, 0.5, 0.5);

const blue = 0x000099;
const green = 0x009900;
const red = 0x990000;

const blueMaterial = new MeshLambertMaterial({ color: blue });
const greenMaterial = new MeshLambertMaterial({ color: green });
const redMaterial = new MeshLambertMaterial({ color: red });

const cube = new Mesh(geometry, blueMaterial);

const cube2 = new Mesh(geometry, greenMaterial);
cube2.position.x += 1;

const cube3 = new Mesh(geometry, redMaterial);
cube3.position.x -= 1;

scene.add(cube, cube2, cube3);

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
renderer.setClearColor(0xffffff);

window.addEventListener("resize", () => {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
});

// Controls

CameraControls.install( { THREE: subsetOfTHREE } ); 
const clock = new Clock();
const cameraControls = new CameraControls(camera, canvas);
cameraControls.setLookAt(-1, 1, 2, 0, 0, 0);

// Lights

const light = new DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 0.5);
const baseLight = new AmbientLight(0xffffff, 1);
scene.add(light, baseLight);

// Raycaster

const objectsToTest = { 
  [cube.uuid]: {object: cube, color: blue},
  [cube2.uuid]: {object: cube2, color: green},
  [cube3.uuid]: {object: cube3, color: red}
};

const objectsArray = Object.values(objectsToTest).map(item => item.object);

const raycaster = new Raycaster();
const mouse = new Vector2();
let previousSelectedUuid;

window.addEventListener('mousemove', (event) => {
	mouse.x = event.clientX / canvas.clientWidth * 2 - 1;
	mouse.y = - (event.clientY / canvas.clientHeight) * 2 + 1;

	raycaster.setFromCamera(mouse, camera)
	const intersects = raycaster.intersectObjects(objectsArray);

  if(!intersects.length) {
    resetPreviousSelection();
    return;
  };

  const firstIntersection = intersects[0];
  firstIntersection.object.material.color.set('orange')

  const isNotPrevious = previousSelectedUuid !== firstIntersection.object.uuid;
	if(previousSelectedUuid !== undefined && isNotPrevious) {
    resetPreviousSelection();
  }

  previousSelectedUuid = firstIntersection.object.uuid;
});

function resetPreviousSelection() {
  if(previousSelectedUuid === undefined) return;
  const previousSelected = objectsToTest[previousSelectedUuid];
  previousSelected.object.material.color.set(previousSelected.color);
}



function animate() {
  const delta = clock.getDelta();
	cameraControls.update( delta );
	renderer.render( scene, camera );
  requestAnimationFrame(animate);
}

animate();
