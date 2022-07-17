import {
    AmbientLight,
    AxesHelper,
    DirectionalLight,
    GridHelper,
    PerspectiveCamera,
    Scene,
    Raycaster,
    Vector2,
    WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { IFCLoader } from "web-ifc-three/IFCLoader";
import { IFCBUILDINGSTOREY } from "web-ifc";
import {
    acceleratedRaycast,
    computeBoundsTree,
    disposeBoundsTree
} from 'three-mesh-bvh';

//Creates the Three.js scene
const scene = new Scene();

//Object to store the size of the viewport
const size = {
    width: window.innerWidth,
    height: window.innerHeight,
};

//Creates the camera (point of view of the user)
const camera = new PerspectiveCamera(75, size.width / size.height);
camera.position.z = 15;
camera.position.y = 13;
camera.position.x = 8;

//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(lightColor, 1);
directionalLight.position.set(0, 10, 0);
directionalLight.target.position.set(-5, 0, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas");
const renderer = new WebGLRenderer({canvas: threeCanvas, alpha: true});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//Creates grids and axes in the scene
const grid = new GridHelper(50, 30);
scene.add(grid);

const axes = new AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

//Creates the orbit controls (to navigate the scene)
const controls = new OrbitControls(camera, threeCanvas);
controls.enableDamping = true;
controls.target.set(-2, 0, 0);

//Animation loop
const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

animate();

//Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
    (size.width = window.innerWidth), (size.height = window.innerHeight);
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
});

//Sets up the IFC loading
const ifcModels = [];
const ifcLoader = new IFCLoader();
ifcLoader.ifcManager.setWasmPath("../../../");
ifcLoader.load("../../../IFC/01.ifc", (ifcModel) => {
    ifcModels.push(ifcModel);
    scene.add(ifcModel)
});

async function edit(event) {
    const manager = ifcLoader.ifcManager;
    const storeysIDs = await manager.getAllItemsOfType(0, IFCBUILDINGSTOREY, false);
    const storeyID = storeysIDs[0];
    const storey =  await manager.getItemProperties(0, storeyID);
    console.log(storey);
    storey.LongName.value = "Nivel 1 - Editado";
    manager.ifcAPI.WriteLine(0, storey);

    const data = await manager.ifcAPI.ExportFileAsIFC(0);
    const blob = new Blob([data]);
    const file = new File([blob], "modified.ifc");

    const link = document.createElement('a');
    link.download = 'modified.ifc';
    link.href = URL.createObjectURL(file);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

window.onkeydown = (event) => {
    if(event.code === 'KeyP') {
        edit();
    }
};