import { IfcState } from '../BaseDefinitions';
export declare class MemoryCleaner {
    private state;
    constructor(state: IfcState);
    dispose(): Promise<void>;
}
