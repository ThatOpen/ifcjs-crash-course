import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
import { IFCWALLSTANDARDCASE } from 'web-ifc';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../../../");
    const model = await viewer.IFC.loadIfcUrl(url);
    await viewer.shadowDropper.renderShadow(model.modelID);

    const walls = await viewer.IFC.getAllItemsOfType(model.modelID, IFCWALLSTANDARDCASE, true);

    const table = document.getElementById('walls-table');
    const body = table.querySelector('tbody');
    for(const wall of walls) {
        createWallNameEntry(body, wall);

        for(let propertyName in wall) {
            const propertyValue = wall[propertyName];
            addPropertyEntry(body, propertyName, propertyValue);
        }
    }

    const exportButton = document.getElementById('export');
    exportButton.onclick = () => {
        const book = XLSX.utils.table_to_book(table);
        XLSX.writeFile(book, "SheetJSTable.xlsx");
    }
}

function createWallNameEntry(table, wall) {
    const row = document.createElement('tr');
    table.appendChild(row);

    const wallName = document.createElement('td');
    wallName.colSpan = 2;
    wallName.textContent = 'Wall ' + wall.GlobalId.value;
    row.appendChild(wallName);
}

function addPropertyEntry(table, name, value) {
    const row = document.createElement('tr');
    table.appendChild(row);

    const propertyName = document.createElement('td');
    name = decodeIFCString(name);
    propertyName.textContent = name;
    row.appendChild(propertyName);

    if(value === null || value === undefined) value = "Unknown";
    if(value.value) value = value.value;
    value = decodeIFCString(value);

    const propertyValue = document.createElement('td');
    propertyValue.textContent = value;
    row.appendChild(propertyValue);
}

function decodeIFCString (ifcString) {
    const ifcUnicodeRegEx = /\\X2\\(.*?)\\X0\\/uig;
    let resultString = ifcString;
    let match = ifcUnicodeRegEx.exec (ifcString);
    while (match) {
        const unicodeChar = String.fromCharCode (parseInt (match[1], 16));
        resultString = resultString.replace (match[0], unicodeChar);
        match = ifcUnicodeRegEx.exec (ifcString);
    }
    return resultString;
}

loadIfc('../../../IFC/01.ifc');
