import { IFCLoader } from 'web-ifc-three/IFCLoader';
import { IFCModel } from 'web-ifc-three/IFC/components/IFCModel';
import { IfcContext } from '../context';
export declare class IfcProperties {
    loader: IFCLoader;
    private readonly context;
    private webIfc?;
    constructor(context: IfcContext, loader: IFCLoader);
    dispose(): void;
    /**
     * Serializes all the properties of an IFC (exluding the geometry) into an array of Blobs.
     * This is useful for populating databases with IFC data.
     * @modelID ID of the IFC model whose properties to extract.
     * @maxSize (optional) maximum number of entities for each Blob. If not defined, it's infinite (only one Blob will be created).
     * @event (optional) callback called every time a 10% of entities are serialized into Blobs.
     */
    serializeAllProperties(model: IFCModel, maxSize?: number, event?: (progress: number, total: number) => void): Promise<Blob[]>;
    private getPropertiesAsBlobs;
    private getItemProperty;
    private formatItemProperties;
    private initializePropertiesObject;
    private getBuildingHeight;
    private getBuilding;
    private getAllGeometriesIDs;
}
