import { AxesHelper } from 'three';
import { IfcComponent } from '../../base-types';
import { IfcContext } from '../context';
export declare class IfcAxes extends IfcComponent {
    private context;
    axes?: AxesHelper;
    constructor(context: IfcContext);
    dispose(): void;
    setAxes(size?: number): void;
}
