import { IfcEventData, IfcWorkerAPI, PropertyWorkerAPI, WorkerAPIs } from '../BaseDefinitions';
import { PropertyManager } from '../../components/properties/PropertyManager';
export declare class PropertyWorker implements PropertyWorkerAPI {
    private worker;
    properties?: PropertyManager;
    API: WorkerAPIs;
    constructor(worker: IfcWorkerAPI);
    initializeProperties(): void;
    getAllItemsOfType(data: IfcEventData): Promise<void>;
    getItemProperties(data: IfcEventData): Promise<void>;
    getMaterialsProperties(data: IfcEventData): Promise<void>;
    getPropertySets(data: IfcEventData): Promise<void>;
    getSpatialStructure(data: IfcEventData): Promise<void>;
    getTypeProperties(data: IfcEventData): Promise<void>;
}
