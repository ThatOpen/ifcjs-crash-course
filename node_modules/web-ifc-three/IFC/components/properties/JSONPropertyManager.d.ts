import { pName } from '../../BaseDefinitions';
import { BasePropertyManager } from './BasePropertyManager';
import { PropertyAPI } from './BaseDefinitions';
export declare class JSONPropertyManager extends BasePropertyManager implements PropertyAPI {
    getItemProperties(modelID: number, id: number, recursive?: boolean): Promise<{
        [x: string]: any;
        expressID: number;
        type: string;
    }>;
    getSpatialStructure(modelID: number, includeProperties?: boolean): Promise<{
        expressID: number;
        type: string;
        children: never[];
    }>;
    getAllItemsOfType(modelID: number, type: number, verbose: boolean): Promise<any[]>;
    getProperty(modelID: number, elementID: number, recursive: boolean | undefined, propName: pName): Promise<any[]>;
    protected getNodeType(modelID: number, id: number): string;
    protected getChunks(modelID: number, chunks: any, propNames: pName): Promise<void>;
    private filterItemsByType;
    private getAllRelatedItemsOfType;
    private getItemsByID;
    private getReferencesRecursively;
    private getJSONItem;
    private getMultipleJSONItems;
}
