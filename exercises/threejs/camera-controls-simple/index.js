import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Vector2,
} from "three";

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

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("mousemove", (event) => {
  const position = getMousePosition(event);
  camera.position.x = Math.sin(position.x * Math.PI * 2) * 2;
  camera.position.z = Math.cos(position.x * Math.PI * 2) * 2;
  camera.position.y = position.y * 3;
  camera.lookAt(cubeMesh.position);
});

// The values will vary from -1 to +1
function getMousePosition(event) {
  const position = new Vector2();
  const bounds = canvas.getBoundingClientRect();
  position.x =((event.clientX - bounds.left) / (bounds.right - bounds.left)) * 2 - 1;
  position.y = -((event.clientY - bounds.top) / (bounds.bottom - bounds.top)) * 2 + 1;

  return position;
}
