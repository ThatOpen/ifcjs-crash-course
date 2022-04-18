import { IfcState } from '../BaseDefinitions';
import { MeshLambertMaterial, BufferGeometry } from 'three';
import { BvhManager } from './BvhManager';
import { IFCModel } from './IFCModel';
export interface ParserProgress {
    loaded: number;
    total: number;
}
export interface OptionalCategories {
    [category: number]: boolean;
}
export interface ParserAPI {
    parse(buffer: any, coordinationMatrix?: number[]): Promise<IFCModel>;
    getAndClearErrors(_modelId: number): void;
    setupOptionalCategories(config: OptionalCategories): Promise<void>;
    optionalCategories: OptionalCategories;
}
export interface GeometriesByMaterial {
    [materialID: string]: {
        material: MeshLambertMaterial;
        geometries: BufferGeometry[];
    };
}
/**
 * Reads all the geometry of the IFC file and generates an optimized `THREE.Mesh`.
 */
export declare class IFCParser implements ParserAPI {
    private state;
    private BVH?;
    loadedModels: number;
    optionalCategories: OptionalCategories;
    private geometriesByMaterials;
    private loadingState;
    private currentWebIfcID;
    private currentModelID;
    constructor(state: IfcState, BVH?: BvhManager | undefined);
    setupOptionalCategories(config: OptionalCategories): Promise<void>;
    parse(buffer: any, coordinationMatrix?: number[]): Promise<IFCModel>;
    getAndClearErrors(_modelId: number): void;
    private notifyProgress;
    private newIfcModel;
    private loadAllGeometry;
    private initializeLoadingState;
    private notifyLoadingEnded;
    private updateLoadingState;
    private addOptionalCategories;
    private streamMesh;
    private getPlacedGeometry;
    private getBufferGeometry;
    private storeGeometryByMaterial;
    private getMeshMatrix;
    private ifcGeometryToBuffer;
    private cleanUpGeometryMemory;
}
