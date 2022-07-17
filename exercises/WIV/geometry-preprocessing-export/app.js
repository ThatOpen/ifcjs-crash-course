import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
import {IFCWALL,
    IFCWALLSTANDARDCASE,
    IFCSLAB,
    IFCWINDOW,
    IFCMEMBER,
    IFCPLATE,
    IFCCURTAINWALL,
    IFCFLOWFITTING,
    IFCFLOWSEGMENT,
    IFCFLOWTERMINAL,
    IFCBUILDINGELEMENTPROXY,
    IFCDOOR} from 'web-ifc';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();
viewer.IFC.setWasmPath("../../../");

const input = document.getElementById('file-input');
input.onchange = loadIfc;

async function loadIfc(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    // Export to glTF and JSON
    const result = await viewer.GLTF.exportIfcFileAsGltf({
        ifcFileUrl: url,
        categories: {
            walls: [IFCWALL, IFCWALLSTANDARDCASE],
            slabs: [IFCSLAB],
            windows: [IFCWINDOW],
            curtainwalls: [IFCMEMBER, IFCPLATE, IFCCURTAINWALL],
            doors: [IFCDOOR],
            pipes: [IFCFLOWFITTING, IFCFLOWSEGMENT, IFCFLOWTERMINAL],
            undefined: [IFCBUILDINGELEMENTPROXY]
        },
        getProperties: true
    });

    // Download result
    const link = document.createElement('a');
    document.body.appendChild(link);

    for(const categoryName in result.gltf) {
        const category = result.gltf[categoryName];
        for(const levelName in category) {
            const file = category[levelName].file;
            if(file) {
                link.download = `${file.name}_${categoryName}_${levelName}.gltf`;
                link.href = URL.createObjectURL(file);
                link.click();
            }
        }
    }

    for(let jsonFile of result.json) {
        link.download = `${jsonFile.name}.json`;
        link.href = URL.createObjectURL(jsonFile);
        link.click();
    }

    link.remove();
}

