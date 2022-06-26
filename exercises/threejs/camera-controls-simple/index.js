import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Vector2,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.getElementById("three-canvas");

//1 The scene
const scene = new Scene();

//2 The Object
const geometry = new BoxGeometry(0.5, 0.5, 0.5);
const material = new MeshBasicMaterial({ color: "orange" });
const cubeMesh = new Mesh(geometry, material);
scene.add(cubeMesh);

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

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
