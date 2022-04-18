import { Color, Vector3, Object3D } from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { IfcViewerAPI } from 'web-ifc-viewer';
import { IFCWINDOW } from 'web-ifc';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../../../");
    const model = await viewer.IFC.loadIfcUrl(url);
    await viewer.shadowDropper.renderShadow(model.modelID);

    const doorProps = await viewer.IFC.getProperties(model.modelID, 22492, false, false);
    formatProperties(doorProps);
    createLabel(model, new Vector3(-0.5, 1, 0), doorProps);

    const windowProps = await viewer.IFC.getProperties(model.modelID, 6691, false, false);
    formatProperties(windowProps);
    createLabel(model, new Vector3(2, 1.5, 10.3), windowProps);

    const panelProps = await viewer.IFC.getProperties(model.modelID, 22820, false, false);
    formatProperties(panelProps);
    createLabel(model, new Vector3(-3, 1.5, 17), panelProps);

    const chairProps = await viewer.IFC.getProperties(model.modelID, 19239, false, false);
    formatProperties(chairProps);
    createLabel(model, new Vector3(-2.8, 0.7, 8.3), chairProps);

}

function formatProperties(properties) {
   for(let name in properties) {
       const value = properties[name];
       if(value === null || value === undefined) properties[name] = "Undefined";
       else if(value.value) properties[name] = value.value;
       else if(typeof value === 'number') properties[name] = value.toString();
   }
}


// Setup camera controls
const controls = viewer.context.ifcCamera.cameraControls;
controls.setPosition(7.6, 4.3, 24.8, false);
controls.setTarget(-7.1, -0.3, 2.5, false);

window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();

loadIfc('../../../IFC/01.ifc');

function createLabel(model, position, properties) {
    const dialog = setupDialog(model, position, properties);
    setupPreview(model, position, dialog);
}

function setupPreview(model, position, htmlDialog) {
    const htmlPreview = document.createElement( 'div' );
    htmlPreview.className = 'props-preview';
    htmlPreview.onmouseenter = () => {
        htmlDialog.classList.remove('collapsed');
    }

    const previewLogo = document.createElement('img');
    previewLogo.src = '../../../static/logo.png';
    previewLogo.className = 'preview-logo';
    htmlPreview.appendChild(previewLogo);

    const propsPreview = new CSS2DObject( htmlPreview );
    propsPreview.position.copy(position);

    model.add(propsPreview);
}

function setupDialog(model, position, properties) {
    const htmlDialog = document.createElement( 'div' );
    htmlDialog.className = 'props-dialog collapsed';
    const propsDialog = new CSS2DObject( htmlDialog );
    htmlDialog.onmouseleave = () => htmlDialog.classList.add('collapsed');
    propsDialog.position.copy(position);
    model.add(propsDialog);
    // const properties = {aaaaaaa: "2341", bbbbb: "dkjfaldfjkal", ccccc: "kdfj akdf ja"}
    generatePropertiesHTML(properties, htmlDialog);
    return htmlDialog;
}

function generatePropertiesHTML(properties, htmlDialog) {
    htmlDialog.children.length = 0;
    let counter = 0;
    const propertyNames = Object.keys(properties);
    propertyNames.forEach(propertyName => {
        const div = document.createElement('div');
        const propertyValue = properties[propertyName];
        div.textContent = `${propertyName}: ${propertyValue}`;
        div.classList.add('props-entry');
        htmlDialog.appendChild(div);

        const isLastElement = counter === propertyNames.length - 1;
        if(!isLastElement) {
            const divider = document.createElement('div');
            divider.classList.add('props-divider');
            htmlDialog.appendChild(divider);
            counter++;
        }
    })
}