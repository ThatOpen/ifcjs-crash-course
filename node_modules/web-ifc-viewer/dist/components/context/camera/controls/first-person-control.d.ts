import { Camera } from 'three';
import { IfcComponent, NavigationMode, NavigationModes } from '../../../../base-types';
import { IfcCamera } from '../camera';
import { LiteEvent } from '../../../../utils/LiteEvent';
import { IfcContext } from '../../context';
export declare class FirstPersonControl extends IfcComponent implements NavigationMode {
    private ifcCamera;
    readonly mode = NavigationModes.FirstPerson;
    enabled: boolean;
    onChange: LiteEvent<any>;
    onChangeProjection: LiteEvent<Camera>;
    constructor(context: IfcContext, ifcCamera: IfcCamera);
    toggle(active: boolean): void;
    setupFirstPersonCamera(): void;
}
