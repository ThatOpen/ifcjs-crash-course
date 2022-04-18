import { WorkerActions, WorkerAPIs } from './BaseDefinitions';
import { PropertyHandler } from './handlers/PropertyHandler';
import { WebIfcHandler } from './handlers/WebIfcHandler';
import { IfcState } from '../BaseDefinitions';
import { WorkerStateHandler } from './handlers/WorkerStateHandler';
import { ParserHandler } from './handlers/ParserHandler';
import { BvhManager } from '../components/BvhManager';
import { IndexedDatabase } from '../indexedDB/IndexedDatabase';
export declare class IFCWorkerHandler {
    state: IfcState;
    private BVH;
    requestID: number;
    rejectHandlers: any;
    resolveHandlers: any;
    serializeHandlers: any;
    callbackHandlers: {
        [id: number]: {
            action: any;
            serializer: any;
        };
    };
    onprogressHandlers: any;
    readonly IDB: IndexedDatabase;
    readonly workerState: WorkerStateHandler;
    readonly webIfc: WebIfcHandler;
    readonly properties: PropertyHandler;
    readonly parser: ParserHandler;
    private ifcWorker;
    private readonly serializer;
    private readonly workerPath;
    constructor(state: IfcState, BVH: BvhManager);
    request(worker: WorkerAPIs, action: WorkerActions, args?: any): Promise<any>;
    terminate(): Promise<void>;
    Close(): Promise<void>;
    private handleResponse;
    private callHandlers;
    private resolveOnProgress;
    private resolveSerializations;
    private resolveCallbacks;
}
