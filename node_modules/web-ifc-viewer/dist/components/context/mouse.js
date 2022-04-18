import { Vector2 } from 'three';
import { IfcComponent } from '../../base-types';
export class IfcMouse extends IfcComponent {
    constructor(context) {
        super(context);
        this.position = new Vector2();
        this.setupMousePositionUpdate(context);
    }
    setupMousePositionUpdate(context) {
        const domElement = context.getRenderer().domElement;
        domElement.onmousemove = (event) => {
            const bounds = domElement.getBoundingClientRect();
            this.position.x = ((event.clientX - bounds.left) / (bounds.right - bounds.left)) * 2 - 1;
            this.position.y = -((event.clientY - bounds.top) / (bounds.bottom - bounds.top)) * 2 + 1;
        };
    }
}
//# sourceMappingURL=mouse.js.map