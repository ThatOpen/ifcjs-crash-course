import { IfcAPI } from "../web-ifc-api";
export declare class Properties {
    private api;
    private types;
    constructor(api: IfcAPI);
    getItemProperties(modelID: number, id: number, recursive?: boolean): Promise<any>;
    getPropertySets(modelID: number, elementID: number, recursive?: boolean): Promise<any[]>;
    getTypeProperties(modelID: number, elementID: number, recursive?: boolean): Promise<any[]>;
    getMaterialsProperties(modelID: number, elementID: number, recursive?: boolean): Promise<any[]>;
    getSpatialStructure(modelID: number, includeProperties?: boolean): Promise<{
        expressID: number;
        type: string;
        children: never[];
    }>;
    getAllItemsOfType(modelID: number, type: number, verbose: boolean): Promise<any[]>;
    private getProperty;
    private getChunks;
    private static isRelated;
    private static newIfcProject;
    private getSpatialNode;
    private getChildren;
    private newNode;
    private getNodeType;
    private getSpatialTreeChunks;
    private saveChunk;
    private getRelated;
    private getAllRelatedItemsOfType;
    private cleanupTypes;
    private getAllTypesOfModel;
}
