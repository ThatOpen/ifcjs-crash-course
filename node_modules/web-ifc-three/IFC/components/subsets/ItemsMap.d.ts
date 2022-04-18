import { IfcState } from '../../BaseDefinitions';
import { BufferAttribute, BufferGeometry, Material } from 'three';
export interface Indices {
    [materialID: number]: number[];
}
export interface IndexedGeometry extends BufferGeometry {
    index: BufferAttribute;
}
export interface Group {
    start: number;
    count: number;
    materialIndex?: number;
}
export interface Items {
    indexCache: Uint32Array;
    map: Map<number, Indices>;
}
export interface IndicesMap {
    [modelID: number]: {
        indexCache: Uint32Array;
        map: Map<number, Indices>;
    };
}
export declare class ItemsMap {
    private state;
    constructor(state: IfcState);
    map: IndicesMap;
    generateGeometryIndexMap(modelID: number): void;
    getSubsetID(modelID: number, material?: Material, customID?: string): string;
    dispose(): void;
    private getGeometry;
    private newItemsMap;
    private fillItemsWithGroupInfo;
    private getMaterialStore;
}
