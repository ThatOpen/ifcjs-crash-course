import { IfcViewerAPI } from 'web-ifc-viewer';

main();

async function main() {
	const viewer = await setupScene();
	const ifcModel = await viewer.IFC.loadIfcUrl('../../../IFC/01.ifc');
	const allIDs = getAllIds(ifcModel);
	const subset = getWholeSubset(viewer, ifcModel, allIDs);
	replaceOriginalModelBySubset(viewer, ifcModel, subset);
	setupEvents(viewer, allIDs);
}

function setupEvents(viewer, allIDs) {
	window.ondblclick = () => hideClickedItem(viewer);
	window.onkeydown = (event) => {
		if (event.code === 'Escape') {
			showAllItems(viewer, allIDs);
		}
	};
}

function getAllIds(ifcModel) {
	return Array.from(
		new Set(ifcModel.geometry.attributes.expressID.array),
	);
}

function replaceOriginalModelBySubset(viewer, ifcModel, subset) {
	const items = viewer.context.items;

	items.pickableIfcModels = items.pickableIfcModels.filter(model => model !== ifcModel);
	items.ifcModels = items.ifcModels.filter(model => model !== ifcModel);
	ifcModel.removeFromParent();

	items.ifcModels.push(subset);
	items.pickableIfcModels.push(subset);
}

function getWholeSubset(viewer, ifcModel, allIDs) {
	return viewer.IFC.loader.ifcManager.createSubset({
		modelID: ifcModel.modelID,
		ids: allIDs,
		applyBVH: true,
		scene: ifcModel.parent,
		removePrevious: true,
		customID: 'full-model-subset',
	});
}

async function setupScene() {
	const container = document.getElementById('viewer-container');
	const viewer = new IfcViewerAPI({ container });
	viewer.grid.setGrid();
	viewer.axes.setAxes();
	await viewer.IFC.setWasmPath('../../../');
	return viewer;
}

function showAllItems(viewer, ids) {
	viewer.IFC.loader.ifcManager.createSubset({
		modelID: 0,
		ids,
		removePrevious: false,
		applyBVH: true,
		customID: 'full-model-subset',
	});
}

function hideClickedItem(viewer) {
	const result = viewer.context.castRayIfc();
	if (!result) return;
	const manager = viewer.IFC.loader.ifcManager;
	const id = manager.getExpressId(result.object.geometry, result.faceIndex);
	viewer.IFC.loader.ifcManager.removeFromSubset(
		0,
		[id],
		'full-model-subset',
	);
}

