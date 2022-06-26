import {Scene, BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, WebGLRenderer} from 'three';

//1 The scene
const scene = new Scene()

//2 The Object
const geometry = new BoxGeometry(0.5, 0.5, 0.5);
const material = new MeshBasicMaterial( {color: 'orange'} );
const cubeMesh = new Mesh( geometry, material );
scene.add( cubeMesh );

//3 The Camera
const sizes = {
    width: 800,
    height: 600,
}

const camera = new PerspectiveCamera(75, sizes.width/ sizes.height);
camera.position.z = 3; // Z let's you move backwards and forwards. X is sideways, Y is upward and do
scene.add( camera );

//4 The Renderer
const threeCanvas= document.getElementById('three-canvas')
const renderer = new WebGLRenderer({
    canvas: threeCanvas,
});

renderer.setSize(sizes.width, sizes.height);

// Other cubes
const greenMaterial = new MeshBasicMaterial( {color: 0x00ff00} );
const blueMaterial = new MeshBasicMaterial( {color: 0x0000ff} );

const greenCube = new Mesh( geometry, greenMaterial );
greenCube.position.x += 1;

const blueCube = new Mesh( geometry, blueMaterial );
blueCube.position.x -= 1;

scene.add(greenCube);
scene.add(blueCube);



function animate() {
    cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.z += 0.01;

    greenCube.rotation.x += 0.015;
    greenCube.rotation.z += 0.015;

    blueCube.rotation.x += 0.005;
    blueCube.rotation.z += 0.005;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();