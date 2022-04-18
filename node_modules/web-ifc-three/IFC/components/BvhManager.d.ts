import { BufferGeometry } from 'three';
export declare class BvhManager {
    private computeBoundsTree?;
    private disposeBoundsTree?;
    private acceleratedRaycast?;
    initializeMeshBVH(computeBoundsTree: any, disposeBoundsTree: any, acceleratedRaycast: any): void;
    applyThreeMeshBVH(geometry: BufferGeometry): void;
    private setupThreeMeshBVH;
}
