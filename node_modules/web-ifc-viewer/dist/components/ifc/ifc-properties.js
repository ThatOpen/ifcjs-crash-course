import { IFCBUILDING } from 'web-ifc';
import { geometryTypes } from './geometry-types';
export class IfcProperties {
    constructor(context, loader) {
        this.context = context;
        this.loader = loader;
    }
    dispose() {
        this.context = null;
        this.loader = null;
        this.webIfc = null;
    }
    /**
     * Serializes all the properties of an IFC (exluding the geometry) into an array of Blobs.
     * This is useful for populating databases with IFC data.
     * @modelID ID of the IFC model whose properties to extract.
     * @maxSize (optional) maximum number of entities for each Blob. If not defined, it's infinite (only one Blob will be created).
     * @event (optional) callback called every time a 10% of entities are serialized into Blobs.
     */
    async serializeAllProperties(model, maxSize, event) {
        this.webIfc = this.loader.ifcManager.ifcAPI;
        if (!model)
            throw new Error('The requested model was not found.');
        const blobs = [];
        await this.getPropertiesAsBlobs(model.modelID, blobs, maxSize, event);
        return blobs;
    }
    async getPropertiesAsBlobs(modelID, blobs, maxSize, event) {
        const geometriesIDs = await this.getAllGeometriesIDs(modelID);
        let properties = await this.initializePropertiesObject(modelID);
        const allLinesIDs = await this.webIfc.GetAllLines(modelID);
        const linesCount = allLinesIDs.size();
        let lastEvent = 0.1;
        let counter = 0;
        for (let i = 0; i < linesCount; i++) {
            const id = allLinesIDs.get(i);
            if (!geometriesIDs.has(id)) {
                // eslint-disable-next-line no-await-in-loop
                await this.getItemProperty(modelID, id, properties);
                counter++;
            }
            if (maxSize && counter > maxSize) {
                blobs.push(new Blob([JSON.stringify(properties)], { type: 'application/json' }));
                properties = {};
                counter = 0;
            }
            if (event && i / linesCount > lastEvent) {
                event(i, linesCount);
                lastEvent += 0.1;
            }
        }
        blobs.push(new Blob([JSON.stringify(properties)], { type: 'application/json' }));
    }
    async getItemProperty(modelID, id, properties) {
        try {
            const props = await this.webIfc.GetLine(modelID, id);
            if (props.type) {
                props.type = this.loader.ifcManager.typesMap[props.type];
            }
            this.formatItemProperties(props);
            properties[id] = props;
        }
        catch (e) {
            console.log(`There was a problem getting the properties of the item with ID ${id}`);
        }
    }
    formatItemProperties(props) {
        Object.keys(props).forEach((key) => {
            const value = props[key];
            if (value && value.value !== undefined)
                props[key] = value.value;
            else if (Array.isArray(value))
                props[key] = value.map((item) => {
                    if (item && item.value)
                        return item.value;
                    return item;
                });
        });
    }
    async initializePropertiesObject(modelID) {
        return {
            coordinationMatrix: await this.webIfc.GetCoordinationMatrix(modelID),
            globalHeight: await this.getBuildingHeight(modelID)
        };
    }
    async getBuildingHeight(modelID) {
        const building = await this.getBuilding(modelID);
        let placement;
        const siteReference = building.ObjectPlacement.PlacementRelTo;
        if (siteReference)
            placement = siteReference.RelativePlacement.Location;
        else
            placement = building.ObjectPlacement.RelativePlacement.Location;
        const transform = placement.Coordinates.map((coord) => coord.value);
        return transform[2];
    }
    async getBuilding(modelID) {
        const ifc = this.loader.ifcManager;
        const allBuildingsIDs = await ifc.getAllItemsOfType(modelID, IFCBUILDING, false);
        const buildingID = allBuildingsIDs[0];
        return ifc.getItemProperties(modelID, buildingID, true);
    }
    async getAllGeometriesIDs(modelID) {
        const geometriesIDs = new Set();
        const geomTypesArray = Array.from(geometryTypes);
        for (let i = 0; i < geomTypesArray.length; i++) {
            const category = geomTypesArray[i];
            // eslint-disable-next-line no-await-in-loop
            const ids = await this.webIfc.GetLineIDsWithType(modelID, category);
            const idsSize = ids.size();
            for (let j = 0; j < idsSize; j++) {
                geometriesIDs.add(ids.get(j));
            }
        }
        return geometriesIDs;
    }
}
//# sourceMappingURL=ifc-properties.js.map