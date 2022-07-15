import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();
init();

async function init() {
    await viewer.IFC.setWasmPath('../../../');
    await viewer.IFC.loadIfcUrl('../../../IFC/01.ifc');
    await viewer.GLTF.load('../../../GLTF/police_station.glb');
}