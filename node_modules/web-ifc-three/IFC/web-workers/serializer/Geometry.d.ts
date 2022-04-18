import { BufferGeometry } from 'three';
export declare class SerializedGeometry {
    position: ArrayLike<number>;
    normal: ArrayLike<number>;
    expressID: ArrayLike<number>;
    index: ArrayLike<number>;
    groups: {
        start: number;
        count: number;
        materialIndex?: number;
    }[];
    constructor(geometry: BufferGeometry);
}
export declare class GeometryReconstructor {
    static new(serialized: SerializedGeometry): BufferGeometry;
    private static set;
}
