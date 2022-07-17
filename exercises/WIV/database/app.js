import {Color} from 'three';
import {IfcViewerAPI} from 'web-ifc-viewer'
import {Dexie} from "dexie";

import {
    IFCWALL,
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
    IFCDOOR
} from 'web-ifc';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({container, backgroundColor: new Color(0xffffff)});
viewer.grid.setGrid();
viewer.axes.setAxes();
viewer.IFC.setWasmPath("../../../");

// Get all buttons
const saveButton = document.getElementById('save-button');
const loadButton = document.getElementById('load-button');
const removeButton = document.getElementById('remove-button');

// Set up buttons logic
removeButton.onclick = () => removeDatabase();
loadButton.onclick = () => loadSavedIfc();

// We use the button to display the GUI and the input to load the file
// Because the input is not customizable
const input = document.getElementById('file-input');
saveButton.onclick = () => input.click();
input.onchange = preprocessAndSaveIfc;


// Find out if there is any data stored; if not, prevent button click
updateButtons();

function updateButtons() {
    const previousData = localStorage.getItem('modelsNames');

    if (!previousData) {
        loadButton.classList.add('disabled');
        removeButton.classList.add('disabled');
        saveButton.classList.remove('disabled');
    } else {
        loadButton.classList.remove('disabled');
        removeButton.classList.remove('disabled');
        saveButton.classList.add('disabled');
    }
}

const db = createOrOpenDatabase();

// If the db exists, it opens; if not, dexie creates it automatically
function createOrOpenDatabase() {
    const db = new Dexie("ModelDatabase");

    // DB with single table "bimModels" with primary key "name" and
    // an index on the property "id"
    db.version(1).stores({
        bimModels: `
        name,
        id,
        category,
        level`
    });

    return db;
}

// Saving the model

async function preprocessAndSaveIfc(event) {
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
        }
    });

    // Store the result in the browser memory

    const models = [];

    for (const categoryName in result.gltf) {
        const category = result.gltf[categoryName];
        for (const levelName in category) {
            const file = category[levelName].file;
            if (file) {
                // Serialize data for saving it
                const data = await file.arrayBuffer();
                models.push({
                    name: result.id + categoryName + levelName,
                    id: result.id,
                    category: categoryName,
                    level: levelName,
                    file: data
                })
            }
        }
    }

    // Now, store all the models in the database
    await db.bimModels.bulkPut(models);

    // And store all the names of the models
    const serializedNames = JSON.stringify(models.map(model => model.name));
    localStorage.setItem("modelsNames", serializedNames);
    location.reload();
}

async function loadSavedIfc() {

    // Get the names of the stored models
    const serializedNames = localStorage.getItem("modelsNames");
    const names = JSON.parse(serializedNames);

    // Get all the models from memory and load them
    for (const name of names) {
        const savedModel = await db.bimModels.where("name").equals(name).toArray();

        // Deserialize the data
        const data = savedModel[0].file
        const file = new File([data], 'example');
        const url = URL.createObjectURL(file);
        await viewer.GLTF.loadModel(url);
    }

    loadButton.classList.add('disabled');
}

function removeDatabase() {
    localStorage.removeItem("modelsNames");
    db.delete();
    location.reload();
}

