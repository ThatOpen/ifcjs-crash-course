import { IfcManager } from './ifc-manager';
export declare enum UnitType {
    LENGTHUNIT = "LENGTHUNIT",
    AREAUNIT = "AREAUNIT",
    VOLUMEUNIT = "VOLUMEUNIT"
}
export declare const UnitScale: {
    [unit: string]: number;
};
export declare class IfcUnits {
    allUnits: {
        [modelID: number]: any;
    };
    private ifc;
    constructor(ifc: IfcManager);
    dispose(): void;
    getUnits(modelID: number, type: UnitType): Promise<any>;
    getUnitsOfModel(modelID: number): Promise<void>;
}
