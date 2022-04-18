import { SerializedIfcGeometry } from '../BaseDefinitions';
import { IfcGeometry as WebIfcIfcGeometry } from 'web-ifc';
export declare class IfcGeometry implements WebIfcIfcGeometry {
    private readonly _GetVertexData;
    private readonly _GetVertexDataSize;
    private readonly _GetIndexData;
    private readonly _GetIndexDataSize;
    constructor(vector: SerializedIfcGeometry);
    GetVertexData(): number;
    GetVertexDataSize(): number;
    GetIndexData(): number;
    GetIndexDataSize(): number;
}
