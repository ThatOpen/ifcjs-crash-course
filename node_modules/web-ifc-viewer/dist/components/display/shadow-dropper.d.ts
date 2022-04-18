import { Camera, Group, Mesh, WebGLRenderTarget } from 'three';
import { IfcManager } from '../ifc';
import { IfcContext } from '../context';
export interface Shadow {
    root: Group;
    rt: WebGLRenderTarget;
    rtBlur: WebGLRenderTarget;
    blurPlane: Mesh;
    camera: Camera;
}
export declare class ShadowDropper {
    shadows: {
        [id: string]: Shadow;
    };
    cameraHeight: number;
    darkness: number;
    opacity: number;
    resolution: number;
    amount: number;
    planeColor: number;
    shadowOffset: number;
    private tempMaterial;
    private depthMaterial;
    private context;
    private IFC;
    constructor(context: IfcContext, IFC: IfcManager);
    dispose(): void;
    renderShadow(modelID: number): Promise<void>;
    renderShadowOfMesh(model: Mesh, id?: string): void;
    deleteShadow(id: string): void;
    private createPlanes;
    private initializeShadow;
    private bakeShadow;
    private initializeCamera;
    private initializeRenderTargets;
    private initializeRoot;
    private createBasePlane;
    private createBlurPlane;
    private createPlaneMaterial;
    private initializeDepthMaterial;
    private createShadow;
    private createCamera;
    private getSizeAndCenter;
    private getLowestYCoordinate;
    private blurShadow;
}
