import { Vector as WebIfcVector, IfcGeometry as WebIfcIfcGeometry, FlatMesh as WebIfcFlatMesh } from 'web-ifc';
import { SerializedFlatMesh, SerializedIfcGeometry, SerializedVector } from '../BaseDefinitions';
import { Vector } from './Vector';
import { IfcGeometry } from './IfcGeometry';
import { FlatMesh } from './FlatMesh';
import { IFCModel } from '../../components/IFCModel';
import { SerializedMesh } from './Mesh';
export declare class Serializer {
    serializeVector<T>(vector: WebIfcVector<T>): SerializedVector;
    reconstructVector(vector: SerializedVector): Vector<any>;
    serializeIfcGeometry(geometry: WebIfcIfcGeometry): SerializedIfcGeometry;
    reconstructIfcGeometry(geometry: SerializedIfcGeometry): IfcGeometry;
    serializeFlatMesh(flatMesh: WebIfcFlatMesh): SerializedFlatMesh;
    reconstructFlatMesh(flatMesh: SerializedFlatMesh): FlatMesh;
    serializeFlatMeshVector(vector: WebIfcVector<WebIfcFlatMesh>): SerializedVector;
    reconstructFlatMeshVector(vector: SerializedVector): WebIfcVector<WebIfcFlatMesh>;
    serializeIfcModel(model: IFCModel): SerializedMesh;
    reconstructIfcModel(model: SerializedMesh): IFCModel;
}
