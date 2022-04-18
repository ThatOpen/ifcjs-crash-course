import { Color, Object3D, Scene } from 'three';
import { IFCModel } from 'web-ifc-three/IFC/components/IFCModel';
import { IfcComponent } from '../../base-types';
import { IfcContext } from './context';
export declare class IfcScene extends IfcComponent {
    private context;
    scene: Scene;
    defaultBackgroundColor: Color;
    constructor(context: IfcContext);
    dispose(): void;
    add(item: Object3D): void;
    remove(item: Object3D): void;
    addModel(model: IFCModel): void;
    removeModel(model: IFCModel): void;
    private setupScene;
    private setupLights;
}
