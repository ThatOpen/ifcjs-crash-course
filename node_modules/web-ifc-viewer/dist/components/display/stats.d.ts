import { IfcComponent } from '../../base-types';
export declare class IfcStats extends IfcComponent {
    stats?: any;
    initializeStats(Stats: any): void;
    update(_delta: number): void;
    addStats(css?: string): void;
}
