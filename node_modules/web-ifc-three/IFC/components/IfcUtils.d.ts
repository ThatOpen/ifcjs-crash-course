import { IfcState } from '../BaseDefinitions';
export declare class IfcUtils {
    private state;
    private map;
    private api;
    constructor(state: IfcState);
    generateInverseMap(): void;
    disposeInverseMap(): void;
    reverseElementMapping(obj: any): {};
    isA(entity: any, entity_class: string): string | boolean;
    byId(modelID: number, id: number): Promise<any>;
    IdsByType(modelID: number, entity_class: string): Promise<import("web-ifc").Vector<number>>;
    byType(modelID: number, entity_class: string): Promise<any[] | undefined>;
}
