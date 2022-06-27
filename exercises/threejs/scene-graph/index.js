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
  SphereGeometry,
  Object3D
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
const sphereGeometry = new SphereGeometry(0.5);

const solarSystem = new Object3D();
scene.add(solarSystem);

const sunMaterial = new MeshBasicMaterial({color: 'yellow' });
const sunMesh= new Mesh(sphereGeometry, sunMaterial);
solarSystem.add(sunMesh);

const earthMaterial = new MeshBasicMaterial({color: 'blue' });
const earthMesh = new Mesh(sphereGeometry, earthMaterial);
earthMesh.position.set(5, 0, 0);
sunMesh.add(earthMesh);

const moonMaterial = new MeshBasicMaterial({color: 'white' });
const moonMesh = new Mesh(sphereGeometry, moonMaterial);
moonMesh.scale.set(0.5, 0.5, 0.5);
moonMesh.position.set(1, 0, 0);
earthMesh.add(moonMesh);


//3 The Camera
const camera = new PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight
);
camera.position.z = 3;
camera.position.y = 6;
camera.lookAt(solarSystem);
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

// Controls
CameraControls.install( { THREE: subsetOfTHREE } ); 
const clock = new Clock();
const cameraControls = new CameraControls(camera, canvas);

function animate() {

  sunMesh.rotation.y += 0.005;
  earthMesh.rotation.y += 0.05;


  const delta = clock.getDelta();
	cameraControls.update( delta );
	renderer.render( scene, camera );
  requestAnimationFrame(animate);
}

animate();
