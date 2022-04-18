import { IfcEventData, IfcWorkerAPI, ParserWorkerAPI, WorkerAPIs } from '../BaseDefinitions';
import { IFCParser } from '../../components/IFCParser';
import { Serializer } from '../serializer/Serializer';
import { IndexedDatabase } from '../../indexedDB/IndexedDatabase';
export interface ParserResult {
    modelID: number;
}
export declare class ParserWorker implements ParserWorkerAPI {
    private worker;
    private serializer;
    private IDB;
    parser?: IFCParser;
    API: WorkerAPIs;
    constructor(worker: IfcWorkerAPI, serializer: Serializer, IDB: IndexedDatabase);
    initializeParser(): void;
    setupOptionalCategories(data: IfcEventData): void;
    parse(data: IfcEventData): Promise<void>;
    private onProgress;
    private getResponse;
    private cleanUpGeometries;
}
