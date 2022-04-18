import { IfcState } from '../BaseDefinitions';
import { IFCWorkerHandler } from '../web-workers/IFCWorkerHandler';
/**
 * Contains the logic to manage the type (e. g. IfcWall, IfcWindow, IfcDoor) of
 * all the items within an IFC file.
 */
export declare class TypeManager {
    private state;
    constructor(state: IfcState);
    getAllTypes(worker?: IFCWorkerHandler): Promise<void>;
    getAllTypesOfModel(modelID: number, worker?: IFCWorkerHandler): Promise<void>;
}
