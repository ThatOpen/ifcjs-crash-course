import CameraControls from 'camera-controls';
import { Vector3 } from 'three';
import { CameraProjections, IfcComponent, NavigationModes } from '../../../../base-types';
import { LiteEvent } from '../../../../utils/LiteEvent';
export class FirstPersonControl extends IfcComponent {
    constructor(context, ifcCamera) {
        super(context);
        this.ifcCamera = ifcCamera;
        this.mode = NavigationModes.FirstPerson;
        this.enabled = false;
        this.onChange = new LiteEvent();
        this.onChangeProjection = new LiteEvent();
    }
    toggle(active) {
        this.enabled = active;
        if (active) {
            if (this.ifcCamera.projection !== CameraProjections.Perspective) {
                this.ifcCamera.setNavigationMode(NavigationModes.Orbit);
                return;
            }
            this.setupFirstPersonCamera();
        }
    }
    setupFirstPersonCamera() {
        const controls = this.ifcCamera.cameraControls;
        const cameraPosition = new Vector3();
        controls.camera.getWorldPosition(cameraPosition);
        const newTargetPosition = new Vector3();
        controls.distance--;
        controls.camera.getWorldPosition(newTargetPosition);
        controls.minDistance = 1;
        controls.maxDistance = 1;
        controls.distance = 1;
        controls.moveTo(newTargetPosition.x, newTargetPosition.y, newTargetPosition.z);
        this.ifcCamera.cameraControls.truckSpeed = 50;
        controls.mouseButtons.wheel = CameraControls.ACTION.DOLLY;
        controls.touches.two = CameraControls.ACTION.TOUCH_ZOOM_TRUCK;
    }
}
//# sourceMappingURL=first-person-control.js.map