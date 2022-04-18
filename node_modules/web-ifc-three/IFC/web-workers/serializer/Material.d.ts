import { MeshLambertMaterial } from 'three';
export declare class SerializedMaterial {
    color: number[];
    opacity: number;
    transparent: boolean;
    constructor(material: MeshLambertMaterial);
}
export declare class MaterialReconstructor {
    static new(material: SerializedMaterial): MeshLambertMaterial;
}
