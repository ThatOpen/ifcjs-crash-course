import { IfcComponent, NavigationModes } from '../../../../base-types';
import { LiteEvent } from '../../../../utils/LiteEvent';
export class PlanControl extends IfcComponent {
    constructor(context, ifcCamera) {
        super(context);
        this.ifcCamera = ifcCamera;
        this.mode = NavigationModes.Plan;
        this.enabled = false;
        this.onChange = new LiteEvent();
        this.onChangeProjection = new LiteEvent();
        this.defaultAzimuthSpeed = ifcCamera.cameraControls.azimuthRotateSpeed;
        this.defaultPolarSpeed = ifcCamera.cameraControls.polarRotateSpeed;
    }
    toggle(active) {
        this.enabled = active;
        const controls = this.ifcCamera.cameraControls;
        controls.azimuthRotateSpeed = active ? 0 : this.defaultAzimuthSpeed;
        controls.polarRotateSpeed = active ? 0 : this.defaultPolarSpeed;
    }
}
//# sourceMappingURL=plan-control.js.map