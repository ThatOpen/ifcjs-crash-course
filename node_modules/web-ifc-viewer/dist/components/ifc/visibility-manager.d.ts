import { IFCLoader } from 'web-ifc-three/IFCLoader';
import { Material } from 'three';
import { Context } from '../../base-types';
export declare class VisibilityManager {
    private ifc;
    private context;
    private modelMaterials;
    private readonly scene;
    private readonly invisibleMaterial;
    private visibilityID;
    constructor(loader: IFCLoader, context: Context);
    isolateItems(modelID: number, ids: number[], removePrevious?: boolean, material?: Material): void;
    removeIsolation(modelID: number): void;
    private removeIsolationSubset;
    private changeModelMaterial;
    private restoreOriginalModelMaterial;
    private makeOriginalModelPickable;
    private makeModelNotPickable;
    private makeIsolatedSubsetPickable;
    private getMesh;
    private createIsolationSubset;
    private modelNotFoundError;
}
