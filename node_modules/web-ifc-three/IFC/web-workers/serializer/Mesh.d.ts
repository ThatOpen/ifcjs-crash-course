import { IFCModel } from '../../components/IFCModel';
import { SerializedMaterial } from './Material';
import { SerializedGeometry } from './Geometry';
export declare class SerializedMesh {
    modelID: number;
    geometry: SerializedGeometry;
    materials: SerializedMaterial[];
    constructor(model: IFCModel);
}
export declare class MeshReconstructor {
    static new(serialized: SerializedMesh): IFCModel;
    private static getMaterials;
}
