import { IfcState, pName, Node } from '../../BaseDefinitions';
export declare class BasePropertyManager {
    protected state: IfcState;
    constructor(state: IfcState);
    getPropertySets(modelID: number, elementID: number, recursive?: boolean): Promise<any>;
    getTypeProperties(modelID: number, elementID: number, recursive?: boolean): Promise<any>;
    getMaterialsProperties(modelID: number, elementID: number, recursive?: boolean): Promise<any>;
    protected getSpatialNode(modelID: number, node: Node, treeChunks: any, includeProperties?: boolean): Promise<void>;
    protected getChildren(modelID: number, node: Node, treeChunks: any, propNames: pName, includeProperties?: boolean): Promise<void>;
    protected newNode(modelID: number, id: number): {
        expressID: number;
        type: any;
        children: never[];
    };
    protected getSpatialTreeChunks(modelID: number): Promise<any>;
    protected saveChunk(chunks: any, propNames: pName, rel: any): void;
    protected getRelated(rel: any, propNames: pName, IDs: number[]): void;
    protected static isRelated(id: number, rel: any, propNames: pName): boolean;
    protected static newIfcProject(id: number): {
        expressID: number;
        type: string;
        children: never[];
    };
    getProperty(modelID: number, elementID: number, recursive: boolean | undefined, propName: pName): Promise<any>;
    protected getChunks(modelID: number, chunks: any, propNames: pName): Promise<void>;
    protected getItemProperties(modelID: number, expressID: number, recursive?: boolean): Promise<any>;
    protected getNodeType(modelID: number, id: number): any;
}
