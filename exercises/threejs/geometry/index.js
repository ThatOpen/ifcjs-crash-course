import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  MeshPhongMaterial,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  WebGLRenderer,
  Vector2,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.getElementById("three-canvas");

//1 The scene
const scene = new Scene();

//2 The Object
const geometry = new BoxGeometry(0.5, 0.5, 0.5);


// Edges geometry
const material = new MeshBasicMaterial( {
  color: 0xffffff,
  polygonOffset: true,
  polygonOffsetFactor: 1, // positive value pushes polygon further away
  polygonOffsetUnits: 1
} );

const mesh = new Mesh( geometry, material );
scene.add( mesh )


const geo = new EdgesGeometry( mesh.geometry ); // or WireframeGeometry
const mat = new LineBasicMaterial( { color: 0x000000 } );
const wireframe = new LineSegments( geo, mat );
mesh.add( wireframe );

// Wireframe geometry
const wireMat = new MeshBasicMaterial({color: 0x000000, wireframe: true});
const wireMesh = new Mesh(geometry, wireMat);
scene.add(wireMesh);
wireMesh.position.x += 1;

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
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
