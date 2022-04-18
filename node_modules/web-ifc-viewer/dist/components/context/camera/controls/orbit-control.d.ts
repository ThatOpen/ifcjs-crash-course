import { Camera, Vector3 } from 'three';
import { IfcComponent, NavigationMode, NavigationModes } from '../../../../base-types';
import { LiteEvent } from '../../../../utils/LiteEvent';
import { IfcCamera } from '../camera';
import { IfcContext } from '../../context';
export declare class OrbitControl extends IfcComponent implements NavigationMode {
    private context;
    private ifcCamera;
    enabled: boolean;
    readonly mode = NavigationModes.Orbit;
    readonly onChange: LiteEvent<unknown>;
    readonly onUnlock: LiteEvent<unknown>;
    readonly onChangeProjection: LiteEvent<Camera>;
    constructor(context: IfcContext, ifcCamera: IfcCamera);
    /**
     * @deprecated Use cameraControls.getTarget.
     */
    get target(): Vector3;
    toggle(active: boolean): void;
    fitModelToFrame(): Promise<void>;
    private activateOrbitControls;
}
