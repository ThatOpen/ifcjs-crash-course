import { Material, Mesh } from 'three';
import { SubsetConfig, IfcState } from '../../BaseDefinitions';
import { BvhManager } from '../BvhManager';
import { ItemsMap } from './ItemsMap';
export interface Subset extends Mesh {
    modelID: number;
}
export declare type Subsets = {
    [subsetID: string]: {
        ids: Set<number>;
        mesh: Subset;
        bvh: boolean;
    };
};
/**
 * Contains the logic to get, create and delete geometric subsets of an IFC model. For example,
 * this can extract all the items in a specific IfcBuildingStorey and create a new Mesh.
 */
export declare class SubsetManager {
    readonly items: ItemsMap;
    private readonly BVH;
    private state;
    private subsets;
    private subsetCreator;
    constructor(state: IfcState, BVH: BvhManager);
    getSubset(modelID: number, material?: Material, customId?: string): Subset;
    removeSubset(modelID: number, material?: Material, customID?: string): void;
    createSubset(config: SubsetConfig): Subset;
    removeFromSubset(modelID: number, ids: number[], customID?: string, material?: Material): Subset | undefined;
    clearSubset(modelID: number, customID?: string, material?: Material): void;
    dispose(): void;
    private getSubsetID;
}
