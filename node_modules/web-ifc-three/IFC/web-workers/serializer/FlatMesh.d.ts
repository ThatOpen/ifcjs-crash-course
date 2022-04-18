import { SerializedFlatMesh } from '../BaseDefinitions';
import { FlatMesh as WebIfcFlatMesh, PlacedGeometry } from 'web-ifc';
import { Vector } from './Vector';
import { Serializer } from './Serializer';
export declare class FlatMesh implements WebIfcFlatMesh {
    geometries: Vector<PlacedGeometry>;
    expressID: number;
    constructor(serializer: Serializer, flatMesh: SerializedFlatMesh);
}
