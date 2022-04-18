import { Vector2 } from 'three';
import { IfcComponent } from '../../base-types';
import { IfcContext } from './context';
export declare class IfcMouse extends IfcComponent {
    position: Vector2;
    constructor(context: IfcContext);
    private setupMousePositionUpdate;
}
