import { Material } from 'three';
import { IFCModel } from 'web-ifc-three/IFC/components/IFCModel';
import { IfcManager } from '../ifc';
import { IfcContext } from '../context';
export declare class SectionFillManager {
    private IFC;
    private context;
    readonly fills: {
        [name: string]: IFCModel;
    };
    private existMessage;
    constructor(IFC: IfcManager, context: IfcContext);
    dispose(): void;
    create(name: string, modelID: number, ids: number[], material: Material): IFCModel | null;
    createFromMesh(name: string, mesh: IFCModel): void;
    delete(name: string): void;
    private setupMaterial;
    private getSubset;
}
