import { Camera } from 'three';
import { CameraProjections } from '../../../base-types';
import { IfcCamera } from './camera';
import { IfcContext } from '../context';
export declare class ProjectionManager {
    private context;
    private currentProjection;
    private currentCamera;
    private cameras;
    private previousDistance;
    get activeCamera(): Camera;
    get projection(): CameraProjections;
    set projection(projection: CameraProjections);
    setOrthoCamera(): void;
    private getDims;
    private setupOrthoCamera;
    private setPerspectiveCamera;
    constructor(context: IfcContext, ifcCamera: IfcCamera);
}
