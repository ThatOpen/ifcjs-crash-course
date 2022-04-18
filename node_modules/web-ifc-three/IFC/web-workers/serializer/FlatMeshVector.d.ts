import { SerializedVector } from '../BaseDefinitions';
import { FlatMesh as WebIfcFlatMesh, Vector as WebIfcVector } from 'web-ifc';
import { Serializer } from './Serializer';
export declare class FlatMeshVector implements WebIfcVector<WebIfcFlatMesh> {
    private readonly _size;
    private _data;
    constructor(serializer: Serializer, vector: SerializedVector);
    size(): number;
    get(index: number): WebIfcFlatMesh;
}
