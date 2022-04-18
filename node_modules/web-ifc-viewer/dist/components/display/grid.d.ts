import { Color, GridHelper } from 'three';
import { IfcComponent } from '../../base-types';
import { IfcContext } from '../context';
export declare class IfcGrid extends IfcComponent {
    private context;
    grid?: GridHelper;
    constructor(context: IfcContext);
    dispose(): void;
    setGrid(size?: number, divisions?: number, colorCenterLine?: Color, colorGrid?: Color): void;
}
