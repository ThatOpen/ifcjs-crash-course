import { Mesh, Vector3 } from 'three';
import { IfcPlane } from '../clipping-planes/planes';
import { IfcClipper } from '../clipping-planes/clipper';
import { IfcManager } from '../../ifc';
import { IfcContext } from '../../context';
export interface PlanViewConfig {
    modelID: number;
    expressID: number;
    name: string;
    normal?: Vector3;
    point?: Vector3;
    ortho?: boolean;
    rotation?: number;
}
export interface PlanView extends PlanViewConfig {
    plane?: IfcPlane;
}
export declare class PlanManager {
    private ifc;
    private context;
    private clipper;
    planLists: {
        [modelID: number]: {
            [name: string]: PlanView;
        };
    };
    sectionFill: Mesh;
    active: boolean;
    currentPlan?: PlanView;
    defaultSectionOffset: number;
    defaultCameraOffset: number;
    storeys: {
        [modelID: number]: any[];
    };
    private floorPlanViewCached;
    private previousCamera;
    private previousTarget;
    private previousProjection;
    constructor(ifc: IfcManager, context: IfcContext, clipper: IfcClipper);
    dispose(): void;
    getAll(modelID: number): string[];
    create(config: PlanViewConfig): Promise<void>;
    goTo(modelID: number, name: string, animate?: boolean): Promise<void>;
    exitPlanView(animate?: boolean): Promise<void>;
    computeAllPlanViews(modelID: number): Promise<void>;
    private storeCameraPosition;
    private createClippingPlane;
    private getTransformHeight;
    private getCurrentStoreys;
    private getSiteCoords;
    private getBuilding;
    private cacheFloorplanView;
    private moveCameraTo2DPlanPosition;
    private activateCurrentPlan;
    private store3dCameraPosition;
    private getCurrentPlan;
    private hidePreviousClippingPlane;
    private getFloorplanName;
}
