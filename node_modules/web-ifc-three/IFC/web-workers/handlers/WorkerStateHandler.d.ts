import { WorkerAPIs } from '../BaseDefinitions';
import { IFCWorkerHandler } from '../IFCWorkerHandler';
import { IfcState } from '../../BaseDefinitions';
export declare class WorkerStateHandler {
    private handler;
    API: WorkerAPIs;
    state: IfcState;
    constructor(handler: IFCWorkerHandler);
    updateStateUseJson(): Promise<any>;
    updateStateWebIfcSettings(): Promise<any>;
    updateModelStateTypes(modelID: number, types: any): Promise<any>;
    updateModelStateJsonData(modelID: number, jsonData: any): Promise<any>;
    loadJsonDataFromWorker(modelID: number, path: string): Promise<any>;
}
