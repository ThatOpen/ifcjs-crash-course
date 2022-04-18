import { IfcState, SubsetConfig } from '../../BaseDefinitions';
import { ItemsMap } from './ItemsMap';
import { Subset, Subsets } from './SubsetManager';
import { BvhManager } from '../BvhManager';
export declare class SubsetCreator {
    private state;
    private items;
    private subsets;
    private BVH;
    private tempIndex;
    constructor(state: IfcState, items: ItemsMap, subsets: Subsets, BVH: BvhManager);
    createSubset(config: SubsetConfig, subsetID: string): Subset;
    dispose(): void;
    private initializeSubset;
    private initializeSubsetAttributes;
    private initializeSubsetGroups;
    private filterIndices;
    private constructSubsetByMaterial;
    private insertNewIndices;
    private insertIndicesAtGroup;
    private getCurrentGroup;
    private resetGroups;
}
