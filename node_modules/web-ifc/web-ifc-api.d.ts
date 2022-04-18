export * from "./ifc2x4";
import { Properties } from "./helpers/properties";
export * from "./ifc2x4_helper";
export declare const UNKNOWN = 0;
export declare const STRING = 1;
export declare const LABEL = 2;
export declare const ENUM = 3;
export declare const REAL = 4;
export declare const REF = 5;
export declare const EMPTY = 6;
export declare const SET_BEGIN = 7;
export declare const SET_END = 8;
export declare const LINE_END = 9;
export interface LoaderSettings {
    COORDINATE_TO_ORIGIN: boolean;
    USE_FAST_BOOLS: boolean;
    CIRCLE_SEGMENTS_LOW?: number;
    CIRCLE_SEGMENTS_MEDIUM?: number;
    CIRCLE_SEGMENTS_HIGH?: number;
    BOOL_ABORT_THRESHOLD?: number;
}
export interface Vector<T> {
    get(index: number): T;
    size(): number;
}
export interface Color {
    x: number;
    y: number;
    z: number;
    w: number;
}
export interface PlacedGeometry {
    color: Color;
    geometryExpressID: number;
    flatTransformation: Array<number>;
}
export interface FlatMesh {
    geometries: Vector<PlacedGeometry>;
    expressID: number;
}
export interface RawLineData {
    ID: number;
    type: number;
    arguments: any[];
}
export interface LoaderError {
    type: string;
    message: string;
    expressID: number;
    ifcType: number;
}
export interface IfcGeometry {
    GetVertexData(): number;
    GetVertexDataSize(): number;
    GetIndexData(): number;
    GetIndexDataSize(): number;
}
export declare function ms(): number;
export declare type LocateFileHandlerFn = (path: string, prefix: string) => string;
export declare class IfcAPI {
    wasmModule: undefined | any;
    fs: undefined | any;
    wasmPath: string;
    ifcGuidMap: Map<number, Map<string | number, string | number>>;
    /**
     * Contains all the logic and methods regarding properties, psets, qsets, etc.
     */
    properties: Properties;
    /**
     * Initializes the WASM module (WebIFCWasm), required before using any other functionality.
     *
     * @param customLocateFileHandler An optional locateFile function that let's
     * you override the path from which the wasm module is loaded.
     */
    Init(customLocateFileHandler?: LocateFileHandlerFn): Promise<void>;
    /**
     * Opens a model and returns a modelID number
     * @data Buffer containing IFC data (bytes)
     * @data Settings settings for loading the model
    */
    OpenModel(data: Uint8Array, settings?: LoaderSettings): number;
    /**
     * Creates a new model and returns a modelID number
     * @data Settings settings for generating data the model
    */
    CreateModel(settings?: LoaderSettings): number;
    ExportFileAsIFC(modelID: number): Uint8Array;
    /**
     * Opens a model and returns a modelID number
     * @modelID Model handle retrieved by OpenModel, model must not be closed
     * @data Buffer containing IFC data (bytes)
    */
    GetGeometry(modelID: number, geometryExpressID: number): IfcGeometry;
    GetLine(modelID: number, expressID: number, flatten?: boolean): any;
    GetAndClearErrors(modelID: number): Vector<LoaderError>;
    WriteLine(modelID: number, lineObject: any): void;
    FlattenLine(modelID: number, line: any): void;
    GetRawLineData(modelID: number, expressID: number): RawLineData;
    WriteRawLineData(modelID: number, data: RawLineData): any;
    GetLineIDsWithType(modelID: number, type: number): Vector<number>;
    GetAllLines(modelID: Number): Vector<number>;
    SetGeometryTransformation(modelID: number, transformationMatrix: Array<number>): void;
    GetCoordinationMatrix(modelID: number): Array<number>;
    GetVertexArray(ptr: number, size: number): Float32Array;
    GetIndexArray(ptr: number, size: number): Uint32Array;
    getSubArray(heap: any, startPtr: any, sizeBytes: any): any;
    /**
     * Closes a model and frees all related memory
     * @modelID Model handle retrieved by OpenModel, model must not be closed
    */
    CloseModel(modelID: number): void;
    StreamAllMeshes(modelID: number, meshCallback: (mesh: FlatMesh) => void): void;
    StreamAllMeshesWithTypes(modelID: number, types: Array<number>, meshCallback: (mesh: FlatMesh) => void): void;
    /**
     * Checks if a specific model ID is open or closed
     * @modelID Model handle retrieved by OpenModel
    */
    IsModelOpen(modelID: number): boolean;
    /**
     * Load all geometry in a model
     * @modelID Model handle retrieved by OpenModel
    */
    LoadAllGeometry(modelID: number): Vector<FlatMesh>;
    /**
     * Load geometry for a single element
     * @modelID Model handle retrieved by OpenModel
    */
    GetFlatMesh(modelID: number, expressID: number): FlatMesh;
    /**
     * Creates a map between element ExpressIDs and GlobalIDs.
     * Each element has two entries, (ExpressID -> GlobalID) and (GlobalID -> ExpressID).
     * @modelID Model handle retrieved by OpenModel
     */
    CreateIfcGuidToExpressIdMapping(modelID: number): void;
    SetWasmPath(path: string): void;
}
