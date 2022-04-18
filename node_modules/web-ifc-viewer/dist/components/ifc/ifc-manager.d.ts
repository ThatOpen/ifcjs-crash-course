import { IFCLoader } from 'web-ifc-three/IFCLoader';
import { LoaderSettings } from 'web-ifc';
import { IfcComponent } from '../../base-types';
import { IfcUnits } from './units';
import { IfcSelector } from './selection/selector';
import { IfcContext } from '../context';
import { IfcProperties } from './ifc-properties';
export declare class IfcManager extends IfcComponent {
    loader: IFCLoader;
    selector: IfcSelector;
    units: IfcUnits;
    properties: IfcProperties;
    private readonly context;
    constructor(context: IfcContext);
    dispose(): Promise<void>;
    /**
     * Loads the given IFC in the current scene.
     * @file IFC as File.
     * @fitToFrame (optional) if true, brings the perspectiveCamera to the loaded IFC.
     * @onError (optional) a callback function to report on loading errors
     */
    loadIfc(file: File, fitToFrame?: boolean, onError?: (err: any) => any): Promise<any>;
    /**
     * Loads the given IFC in the current scene.
     * @file IFC as URL.
     * @fitToFrame (optional) if true, brings the perspectiveCamera to the loaded IFC.
     * @onProgress (optional) a callback function to report on downloading progress
     * @onError (optional) a callback function to report on loading errors
     */
    loadIfcUrl(url: string, fitToFrame?: boolean, onProgress?: (event: ProgressEvent) => void, onError?: (err: any) => any): Promise<any>;
    /**
     * Sets the relative path of web-ifc.wasm file in the project.
     * Beware: you **must** serve this file in your page; this means
     * that you have to copy this files from *node_modules/web-ifc*
     * to your deployment directory.
     *
     * If you don't use this methods,
     * IFC.js assumes that you are serving it in the root directory.
     *
     * Example if web-ifc.wasm is in dist/wasmDir:
     * `ifcLoader.setWasmPath("dist/wasmDir/");`
     *
     * @path Relative path to web-ifc.wasm.
     */
    setWasmPath(path: string): Promise<void>;
    /**
     * Applies a configuration for [web-ifc](https://ifcjs.github.io/info/docs/Guide/web-ifc/Introduction).
     */
    applyWebIfcConfig(settings: LoaderSettings): Promise<void>;
    /**
     * Gets the spatial structure of the specified model.
     * @modelID ID of the IFC model.
     */
    getSpatialStructure(modelID: number, includeProperties?: boolean): Promise<any>;
    /**
     * Gets the properties of the specified item.
     * @modelID ID of the IFC model.
     * @id Express ID of the item.
     * @indirect If true, also returns psets, qsets and type properties.
     * @recursive If true, this gets the native properties of the referenced elements recursively.
     */
    getProperties(modelID: number, id: number, indirect: boolean, recursive?: boolean): Promise<any>;
    /**
     * Gets the ID of the model pointed by the cursor.
     */
    getModelID(): number | null;
    /**
     * Gets all the items of the specified type in the specified IFC model.
     * @modelID ID of the IFC model.
     * @type type of element. You can import the type from web-ifc.
     * @verbose If true, also gets the properties for all the elements.
     */
    getAllItemsOfType(modelID: number, type: number, verbose?: boolean): Promise<any[]>;
    /**
     * @deprecated: use IFC.selector.prePickIfcItem() instead.
     */
    prePickIfcItem(): Promise<void>;
    /**
     * @deprecated: use IFC.selector.pickIfcItem() instead.
     */
    pickIfcItem(focusSelection?: boolean): Promise<{
        modelID: number;
        id: number;
    } | null>;
    /**
     * @deprecated: use IFC.selector.highlightIfcItem() instead.
     */
    highlightIfcItem(focusSelection?: boolean): Promise<{
        modelID: number;
        id: number;
    } | null>;
    /**
     * @deprecated: use IFC.selector.pickIfcItemsByID() instead.
     */
    pickIfcItemsByID(modelID: number, ids: number[], focusSelection?: boolean): Promise<void>;
    /**
     * @deprecated: use IFC.selector.prepickIfcItemsByID() instead.
     */
    prepickIfcItemsByID(modelID: number, ids: number[], focusSelection?: boolean): Promise<void>;
    /**
     * @deprecated: use IFC.selector.highlightIfcItemsByID() instead.
     */
    highlightIfcItemsByID(modelID: number, ids: number[], focusSelection?: boolean): Promise<void>;
    /**
     * @deprecated: use IFC.selector.unpickIfcItems() instead.
     */
    unpickIfcItems(): void;
    /**
     * @deprecated: use IFC.selector.unPrepickIfcItems() instead.
     */
    unPrepickIfcItems(): void;
    /**
     * @deprecated: use IFC.selector.unHighlightIfcItems() instead.
     */
    unHighlightIfcItems(): void;
    private addIfcModel;
    private setupThreeMeshBVH;
}
