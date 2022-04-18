import { SerializedVector } from '../BaseDefinitions';
import { Vector as WebIfcVector } from 'web-ifc';
export declare class Vector<T> implements WebIfcVector<T> {
    private readonly _size;
    private _data;
    constructor(vector: SerializedVector);
    size(): number;
    get(index: number): T;
}
