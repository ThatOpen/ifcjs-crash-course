import { BasePropertyManager } from './BasePropertyManager';
import { pName } from '../../BaseDefinitions';
import { PropertyAPI } from './BaseDefinitions';
export declare class WebIfcPropertyManager extends BasePropertyManager implements PropertyAPI {
    getItemProperties(modelID: number, id: number, recursive?: boolean): Promise<any>;
    getSpatialStructure(modelID: number, includeProperties?: boolean): Promise<{
        expressID: number;
        type: string;
        children: never[];
    }>;
    getAllItemsOfType(modelID: number, type: number, verbose: boolean): Promise<any[]>;
    getProperty(modelID: number, elementID: number, recursive: boolean | undefined, propName: pName): Promise<any[]>;
    protected getNodeType(modelID: number, id: number): string;
    protected getChunks(modelID: number, chunks: any, propNames: pName): Promise<void>;
    private getAllRelatedItemsOfType;
}
