import { IfcEventData, IfcWorkerAPI, WorkerAPIs, WorkerStateAPI } from '../BaseDefinitions';
export declare class StateWorker implements WorkerStateAPI {
    private worker;
    API: WorkerAPIs;
    private cleaner?;
    constructor(worker: IfcWorkerAPI);
    updateStateUseJson(data: IfcEventData): void;
    updateStateWebIfcSettings(data: IfcEventData): void;
    updateModelStateJsonData(data: IfcEventData): void;
    updateModelStateTypes(data: IfcEventData): void;
    dispose(data: IfcEventData): Promise<void>;
    loadJsonDataFromWorker(data: IfcEventData): Promise<void>;
    private getModel;
}
