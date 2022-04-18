import { PropertyManagerAPI } from '../../components/properties/BaseDefinitions';
import { IFCWorkerHandler } from '../IFCWorkerHandler';
import { WorkerAPIs } from '../BaseDefinitions';
import { BufferGeometry } from 'three';
export declare class PropertyHandler implements PropertyManagerAPI {
    private handler;
    API: WorkerAPIs;
    constructor(handler: IFCWorkerHandler);
    getExpressId(geometry: BufferGeometry, faceIndex: number): number;
    getAllItemsOfType(modelID: number, type: number, verbose: boolean): Promise<any[]>;
    getItemProperties(modelID: number, elementID: number, recursive: boolean): Promise<any>;
    getMaterialsProperties(modelID: number, elementID: number, recursive: boolean): Promise<any[]>;
    getPropertySets(modelID: number, elementID: number, recursive: boolean): Promise<any[]>;
    getTypeProperties(modelID: number, elementID: number, recursive: boolean): Promise<any[]>;
    getSpatialStructure(modelID: number, includeProperties?: boolean): Promise<any>;
}
