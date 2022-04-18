import { Color, Vector3 } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../../../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc('../../../IFC/01.ifc');

// Setup camera controls
const controls = viewer.context.ifcCamera.cameraControls;
controls.setPosition(7.6, 4.3, 24.8, false);
controls.setTarget(-7.1, -0.3, 2.5, false);
controls.mouseButtons.wheel = undefined;

window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
