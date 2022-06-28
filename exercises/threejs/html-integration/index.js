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

import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

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

// Set up 2d renderer

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize( window.innerWidth, window.innerHeight );
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.pointerEvents = 'none';
labelRenderer.domElement.style.top = '0px';
document.body.appendChild( labelRenderer.domElement );

// Set up resize event

window.addEventListener("resize", () => {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  labelRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
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

// Load 3D scan

const loader = new GLTFLoader();

const loadingElem = document.querySelector('#loader-container');
const loadingText = loadingElem.querySelector('p');

let gltfScene;

loader.load(
	// resource URL
	'../../../GLTF/police_station.glb',
	// called when the resource is loaded
	( gltf ) => {

    loadingElem.style.display = 'none';
		scene.add( gltf.scene );
    gltfScene = gltf.scene;

	},
	// called while loading is progressing
	( progress ) => {
    const current = (progress.loaded /  progress.total) * 100;
    const result = Math.min(current, 100); 
    const formatted = Math.trunc(result * 100) / 100;
    loadingText.textContent = `Loading: ${formatted}%`;
	},
	// called when loading has errors
	( error ) => {

		console.log( 'An error happened: ', error );

	}
);

// Set up raycasting

const raycaster = new Raycaster();
const mouse = new Vector2();

window.addEventListener('dblclick', (event) => {
	mouse.x = event.clientX / canvas.clientWidth * 2 - 1;
	mouse.y = - (event.clientY / canvas.clientHeight) * 2 + 1;

	raycaster.setFromCamera(mouse, camera);
	const intersects = raycaster.intersectObject(gltfScene);

  if(!intersects.length) {
    return;
  };

  const firstIntersection = intersects[0];
  const location =  firstIntersection.point;

  const result = window.prompt("Introduce message:");

  const base = document.createElement( 'div' );
  base.className = 'base-label';

  const deleteButton = document.createElement( 'button' );
  deleteButton.textContent = 'X';
  deleteButton.className = 'delete-button hidden';
  base.appendChild(deleteButton);

  base.onmouseenter = () => deleteButton.classList.remove('hidden');
  base.onmouseleave = () => deleteButton.classList.add('hidden');

  const postit = document.createElement( 'div' );
  postit.className = 'label';
  postit.textContent = result;
  base.appendChild(postit);

  const ifcJsTitle = new CSS2DObject( base );
  ifcJsTitle.position.copy(location);
  scene.add(ifcJsTitle);

  deleteButton.onclick = () => {
    base.remove();
    ifcJsTitle.element = null;
    ifcJsTitle.removeFromParent();
  }

});


// Animation

function animate() {
  const delta = clock.getDelta();
	cameraControls.update( delta );
	renderer.render( scene, camera );
  labelRenderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();