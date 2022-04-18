import { BackSide } from 'three';
import { disposeMeshRecursively } from '../../utils/ThreeUtils';
export class SectionFillManager {
    constructor(IFC, context) {
        this.IFC = IFC;
        this.context = context;
        this.existMessage = 'The specified fill already exists';
        this.fills = {};
    }
    dispose() {
        const fills = Object.values(this.fills);
        fills.forEach((fill) => disposeMeshRecursively(fill));
        this.fills = null;
    }
    create(name, modelID, ids, material) {
        if (this.fills[name] !== undefined)
            throw new Error(this.existMessage);
        material.clippingPlanes = this.context.getClippingPlanes();
        const model = this.context.items.ifcModels.find((model) => model.modelID === modelID);
        if (!model)
            throw new Error('The requested model to fill was not found.');
        this.setupMaterial(material);
        const subset = this.getSubset(modelID, ids, material, name);
        if (!subset)
            return null;
        this.context.items.pickableIfcModels.push(subset);
        subset.position.copy(model.position);
        subset.rotation.copy(model.rotation);
        this.context.getScene().add(subset);
        this.fills[name] = subset;
        // subset.renderOrder = 2;
        return subset;
    }
    createFromMesh(name, mesh) {
        if (this.fills[name] !== undefined)
            throw new Error(this.existMessage);
        const planes = this.context.getClippingPlanes();
        if (Array.isArray(mesh.material)) {
            mesh.material.forEach((material) => {
                material.clippingPlanes = planes;
            });
        }
        else {
            mesh.material.clippingPlanes = planes;
        }
        this.fills[name] = mesh;
    }
    delete(name) {
        const subset = this.fills[name];
        delete this.fills[name];
        this.context.scene.removeModel(subset);
        subset.geometry.dispose();
    }
    setupMaterial(material) {
        material.clippingPlanes = this.context.getClippingPlanes();
        material.side = BackSide;
        material.polygonOffset = true;
        material.polygonOffsetFactor = -1;
        material.polygonOffsetUnits = 1;
    }
    getSubset(modelID, ids, material, name) {
        return this.IFC.loader.ifcManager.createSubset({
            modelID,
            ids,
            scene: this.context.getScene(),
            removePrevious: true,
            material,
            applyBVH: true,
            customID: name
        });
    }
}
//# sourceMappingURL=fills.js.map