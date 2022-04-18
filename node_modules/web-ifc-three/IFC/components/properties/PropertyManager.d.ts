import { IfcState } from '../../BaseDefinitions';
import { BufferGeometry } from 'three';
import { PropertyManagerAPI } from './BaseDefinitions';
/**
 * Contains the logic to get the properties of the items within an IFC model.
 */
export declare class PropertyManager implements PropertyManagerAPI {
    private state;
    private readonly webIfcProps;
    private readonly jsonProps;
    private currentProps;
    constructor(state: IfcState);
    getExpressId(geometry: BufferGeometry, faceIndex: number): number;
    getItemProperties(modelID: number, elementID: number, recursive?: boolean): Promise<any>;
    getAllItemsOfType(modelID: number, type: number, verbose: boolean): Promise<any[]>;
    getPropertySets(modelID: number, elementID: number, recursive?: boolean): Promise<any[]>;
    getTypeProperties(modelID: number, elementID: number, recursive?: boolean): Promise<any[]>;
    getMaterialsProperties(modelID: number, elementID: number, recursive?: boolean): Promise<any[]>;
    getSpatialStructure(modelID: number, includeProperties?: boolean): Promise<any>;
    private updateCurrentProps;
}
