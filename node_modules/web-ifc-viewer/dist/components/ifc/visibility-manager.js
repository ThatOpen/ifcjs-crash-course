import { MeshBasicMaterial } from 'three';
export class VisibilityManager {
    constructor(loader, context) {
        this.modelMaterials = {};
        this.invisibleMaterial = new MeshBasicMaterial({ visible: false });
        this.visibilityID = 'web-ifc-viewer-visibility';
        this.ifc = loader;
        this.context = context;
        this.scene = this.context.getScene();
    }
    isolateItems(modelID, ids, removePrevious = true, material) {
        this.createIsolationSubset(modelID, ids, removePrevious);
        this.makeIsolatedSubsetPickable(modelID);
        this.changeModelMaterial(modelID, material);
        this.makeModelNotPickable(modelID);
    }
    removeIsolation(modelID) {
        this.removeIsolationSubset(modelID);
        this.restoreOriginalModelMaterial(modelID);
        this.makeOriginalModelPickable(modelID);
    }
    removeIsolationSubset(modelID) {
        const subset = this.ifc.ifcManager.getSubset(modelID, undefined, this.visibilityID);
        const index = this.context.items.pickableIfcModels.indexOf(subset);
        if (index >= 0)
            this.context.items.pickableIfcModels.splice(index);
        this.ifc.ifcManager.removeSubset(modelID, undefined, this.visibilityID);
    }
    changeModelMaterial(modelID, material) {
        const mesh = this.getMesh(modelID);
        if (mesh) {
            this.modelMaterials[modelID].model = mesh;
            this.modelMaterials[modelID].materials = mesh.material;
            mesh.material = material || this.invisibleMaterial;
        }
    }
    restoreOriginalModelMaterial(modelID) {
        if (this.modelMaterials[modelID]) {
            this.modelMaterials[modelID].model.material = this.modelMaterials[modelID].materials;
        }
    }
    makeOriginalModelPickable(modelID) {
        const originalModel = this.context.items.ifcModels.find((mesh) => mesh.modelID === modelID);
        if (originalModel) {
            this.context.items.pickableIfcModels.push(originalModel);
            return;
        }
        this.modelNotFoundError(modelID);
    }
    makeModelNotPickable(modelID) {
        this.context.items.pickableIfcModels = this.context.items.pickableIfcModels.filter((ifcMesh) => {
            return ifcMesh.modelID !== modelID;
        });
    }
    makeIsolatedSubsetPickable(model) {
        const isolatedItems = this.ifc.ifcManager.getSubset(model, undefined, this.visibilityID);
        if (!isolatedItems)
            throw new Error('Subset for isolation not found.');
        this.context.items.pickableIfcModels.push(isolatedItems);
    }
    getMesh(modelID) {
        return this.context.items.ifcModels.find((model) => model.modelID === modelID);
    }
    createIsolationSubset(modelID, ids, removePrevious) {
        if (ids.length === 0) {
            this.ifc.ifcManager.removeSubset(modelID, undefined, this.visibilityID);
            return;
        }
        this.ifc.ifcManager.createSubset({
            scene: this.scene,
            ids,
            modelID,
            removePrevious,
            customID: this.visibilityID
        });
    }
    modelNotFoundError(modelID) {
        throw new Error(`Model with ID ${modelID} was not found.`);
    }
}
//# sourceMappingURL=visibility-manager.js.map