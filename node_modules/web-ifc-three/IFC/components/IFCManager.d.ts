import { ParserAPI, ParserProgress } from './IFCParser';
import { SubsetManager } from './subsets/SubsetManager';
import { SubsetConfig, IfcState, JSONObject } from '../BaseDefinitions';
import { BufferGeometry, Material, Matrix4, Scene } from 'three';
import { IFCModel } from './IFCModel';
import { LoaderSettings } from 'web-ifc';
/**
 * Contains all the logic to work with the loaded IFC files (select, edit, etc).
 */
export declare class IFCManager {
    state: IfcState;
    private BVH;
    parser: ParserAPI;
    subsets: SubsetManager;
    typesMap: {
        [key: number]: string;
    };
    private properties;
    private types;
    private cleaner;
    private worker?;
    /**
     * Returns the underlying web-ifc API.
     */
    get ifcAPI(): import("../BaseDefinitions").WebIfcAPI;
    parse(buffer: ArrayBuffer): Promise<IFCModel>;
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
     * Makes object picking a lot faster
     * Courtesy of gkjohnson's [work](https://github.com/gkjohnson/three-mesh-bvh).
     * Import these objects from his library and pass them as arguments. IFC.js takes care of the rest!
     */
    setupThreeMeshBVH(computeBoundsTree: any, disposeBoundsTree: any, acceleratedRaycast: any): void;
    /**
     * Sets a callback function that is called every 10% of IFC loaded.
     * @onProgress callback function
     */
    setOnProgress(onProgress: (event: ParserProgress) => void): void;
    /**
     * Sets a coordination matrix to be applied when loading geometry.
     * @matrix THREE.Matrix4
     */
    setupCoordinationMatrix(matrix: Matrix4): void;
    /**
     * Clears the coordination matrix that is applied when loading geometry.
     */
    clearCoordinationMatrix(): void;
    /**
     * Applies a configuration for [web-ifc](https://ifcjs.github.io/info/docs/Guide/web-ifc/Introduction).
     */
    applyWebIfcConfig(settings: LoaderSettings): Promise<void>;
    /**
     * Uses web workers, making the loader non-blocking.
     * @active Wether to use web workers or not.
     * @path Relative path to the web worker file. Necessary if active=true.
     */
    useWebWorkers(active: boolean, path?: string): Promise<void>;
    /**
     * @deprecated This approach had sense when the compute-heavy operations were blocking. If you are facing performance issues, you can either use webworkers or use the approach used in web-ifc-viewer to work with JSON and glTF. If you have any question regarding this, check out the docs or ask us direclty.
     * Enables the JSON mode (which consumes way less memory) and eliminates the WASM data.
     * Only use this in the following scenarios:
     * - If you don't need to access the properties of the IFC
     * - If you will provide the properties as JSON.
     * @useJSON: Wether to use the JSON mode or not.
     */
    useJSONData(useJSON?: boolean): Promise<void>;
    /**
     * @deprecated This approach had sense when the compute-heavy operations were blocking. If you are facing performance issues, you can either use webworkers or use the approach used in web-ifc-viewer to work with JSON and glTF. If you have any question regarding this, check out the docs or ask us direclty.
     * Adds the properties of a model as JSON data. If you are using web workers, use
     * `loadJsonDataFromWorker()` instead to avoid overheads.
     * @modelID ID of the IFC model.
     * @data: data as an object where the keys are the expressIDs and the values the properties.
     */
    addModelJSONData(modelID: number, data: {
        [id: number]: JSONObject;
    }): Promise<void>;
    /**
     * @deprecated This approach had sense when the compute-heavy operations were blocking. If you are facing performance issues, you can either use webworkers or use the approach used in web-ifc-viewer to work with JSON and glTF. If you have any question regarding this, check out the docs or ask us direclty.
     * Loads the data of an IFC model from a JSON file directly from a web worker. If you are not using
     * web workers, use `addModelJSONData()` instead.
     * @modelID ID of the IFC model.
     * @path: the path to the JSON file **relative to the web worker file**.
     */
    loadJsonDataFromWorker(modelID: number, path: string): Promise<void>;
    /**
     * Closes the specified model and deletes it from the [scene](https://threejs.org/docs/#api/en/scenes/Scene).
     * @modelID ID of the IFC model.
     * @scene Scene where the model is (if it's located in a scene).
     */
    close(modelID: number, scene?: Scene): void;
    /**
     * Gets the **Express ID** to which the given face belongs.
     * This ID uniquely identifies this entity within this IFC file.
     * @geometry The geometry IFC model.
     * @faceIndex The index of the face of a geometry.You can easily get this index using the [Raycaster](https://threejs.org/docs/#api/en/core/Raycaster).
     */
    getExpressId(geometry: BufferGeometry, faceIndex: number): number;
    /**
     * Returns all items of the specified type. You can import
     * the types from *web-ifc*.
     *
     * Example to get all the standard walls of a project:
     * ```js
     * import { IFCWALLSTANDARDCASE } from 'web-ifc';
     * const walls = ifcLoader.getAllItemsOfType(IFCWALLSTANDARDCASE);
     * ```
     * @modelID ID of the IFC model.
     * @type type of IFC items to get.
     * @verbose If false (default), this only gets IDs. If true, this also gets the native properties of all the fetched items.
     */
    getAllItemsOfType(modelID: number, type: number, verbose: boolean): Promise<any[]>;
    /**
     * Gets the native properties of the given element.
     * @modelID ID of the IFC model.
     * @id Express ID of the element.
     * @recursive Wether you want to get the information of the referenced elements recursively.
     */
    getItemProperties(modelID: number, id: number, recursive?: boolean): Promise<any>;
    /**
     * Gets the [property sets](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifckernel/lexical/ifcpropertyset.htm)
     * assigned to the given element.
     * @modelID ID of the IFC model.
     * @id Express ID of the element.
     * @recursive If true, this gets the native properties of the referenced elements recursively.
     */
    getPropertySets(modelID: number, id: number, recursive?: boolean): Promise<any[]>;
    /**
     * Gets the properties of the type assigned to the element.
     * For example, if applied to a wall (IfcWall), this would get back the information
     * contained in the IfcWallType assigned to it, if any.
     * @modelID ID of the IFC model.
     * @id Express ID of the element.
     * @recursive If true, this gets the native properties of the referenced elements recursively.
     */
    getTypeProperties(modelID: number, id: number, recursive?: boolean): Promise<any[]>;
    /**
     * Gets the materials assigned to the given element.
     * @modelID ID of the IFC model.
     * @id Express ID of the element.
     * @recursive If true, this gets the native properties of the referenced elements recursively.
     */
    getMaterialsProperties(modelID: number, id: number, recursive?: boolean): Promise<any[]>;
    /**
     * Gets the ifc type of the specified item.
     * @modelID ID of the IFC model.
     * @id Express ID of the element.
     */
    getIfcType(modelID: number, id: number): string;
    /**
     * Gets the spatial structure of the project. The
     * [spatial structure](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcproductextension/lexical/ifcspatialstructureelement.htm)
     * is the hierarchical structure that organizes every IFC project (all physical items
     * are referenced to an element of the spatial structure). It is formed by
     * one IfcProject that contains one or more IfcSites, that contain one or more
     * IfcBuildings, that contain one or more IfcBuildingStoreys, that contain
     * one or more IfcSpaces.
     * @modelID ID of the IFC model.
     */
    getSpatialStructure(modelID: number, includeProperties?: boolean): Promise<any>;
    /**
     * Gets the mesh of the subset with the specified [material](https://threejs.org/docs/#api/en/materials/Material).
     * If no material is given, this returns the subset with the original materials.
     * @modelID ID of the IFC model.
     * @material Material assigned to the subset (if any).
     * @customId Optional identifier of the subset.
     */
    getSubset(modelID: number, material?: Material, customId?: string): import("./subsets/SubsetManager").Subset;
    /**
     * Removes the specified subset.
     * @modelID ID of the IFC model.
     * @parent The parent where the subset is (can be any `THREE.Object3D`).
     * @material Material assigned to the subset, if any.
     */
    removeSubset(modelID: number, material?: Material, customID?: string): void;
    /**
     * Creates a new geometric subset.
     * @config A configuration object with the following options:
     * - **scene**: `THREE.Object3D` where the model is located.
     * - **modelID**: ID of the model.
     * - **ids**: Express IDs of the items of the model that will conform the subset.
     * - **removePrevious**: wether to remove the previous subset of this model with this material.
     * - **material**: (optional) wether to apply a material to the subset.
     * - **customID**: (optional) custom identifier to distinguish subsets of the same model with the same material.
     */
    createSubset(config: SubsetConfig): import("./subsets/SubsetManager").Subset;
    /**
     * Removes the specified items from the geometry of a subset.
     * @modelID ID of the IFC model.
     * @ids Express IDs of the items of the model that will conform the subset.
     * @material (optional) Material assigned to the subset, if any.
     * @customID (optional) custom identifier to distinguish subsets of the same model with the same material.
     */
    removeFromSubset(modelID: number, ids: number[], customID?: string, material?: Material): import("./subsets/SubsetManager").Subset | undefined;
    /**
     * Removes all the geometry of a subset.
     * @modelID ID of the IFC model.
     * @ids Express IDs of the items of the model that will conform the subset.
     * @material (optional) Material assigned to the subset, if any.
     * @customID (optional) custom identifier to distinguish subsets of the same model with the same material.
     */
    clearSubset(modelID: number, customID?: string, material?: Material): void;
    /**
     * Disposes all memory used by the IFCLoader, including WASM memory and the web worker.
     * Use this if you want to destroy the object completely.
     * If you want to load an IFC later, you'll need to create a new instance.
     */
    dispose(): Promise<void>;
    /**
     * @deprecated This approach had sense when the compute-heavy operations were blocking. If you are facing performance issues, you can either use webworkers or use the approach used in web-ifc-viewer to work with JSON and glTF. If you have any question regarding this, check out the docs or ask us direclty.
     * Completely releases the WASM memory, thus drastically decreasing the memory use of the app.
     * Only use this in the following scenarios:
     * - If you don't need to access the properties of the IFC
     * - If you will provide the properties as JSON.
     */
    disposeMemory(): Promise<void>;
    /**
     * For internal use of IFC.js dev team and testers
     */
    getAndClearErrors(modelID: number): void;
    private initializeWorkers;
}
