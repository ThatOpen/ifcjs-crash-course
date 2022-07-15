import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();
init();

async function init() {
    await viewer.IFC.setWasmPath('../../../');
    await viewer.IFC.loadIfcUrl('../../../IFC/01.ifc');

}

import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {IfcEventsService} from '@app/application/digital-twin/services/ifc-events.service';
import {DTEvent} from '@app/application/digital-twin/services/base-types';

class AutilityCacheDB extends Dexie {

    bimModels: Dexie.Table<CachedModel, string>;

    constructor() {
        super('AutilityDB');
        this.version(1).stores({
            bimModels: 'name,content'
        });
    }
}

export interface CachedModel {
    name: string;
    data: string | number;
}

export interface Metadata {
    name: string;
    size: number;
}

@Injectable({providedIn: 'root'})
export class ModelCacheService {

    private static notFoundError = "The queried data is not cached.";
    // Dexie uses indexedDB under the hood; unlimited capacity, but slow
    private cacheDB = new AutilityCacheDB();

    // Local storage has less capacity but it's much faster
    private fastDB = window.localStorage;

    // There's a certain amount of data that can be cached at once
    // If larger, data needs to be batched and saved in chunks
    private batchSize = 60000000;

    constructor(private events: IfcEventsService) {
}

private static getMetadataName(name: string) {
    return `${name}_meta`;
}

private static getChunkName(name: string, index: number) {
    return `${name}_chunk${index}`
}

async saveFile(fileName: string, file: string, overrideCache = false) {
    if (!this.isCached(fileName) || overrideCache) {
        const chunks = this.batchFile(fileName, file);
        this.saveMetadata(fileName, chunks.length);
        this.events.publish(DTEvent.onCachingStarted);
        for (const batch of chunks) {
            const name = batch.name;
            const data = batch.data;
            await this.cacheDB.bimModels.put({name, data});
        }
    }
}

async getFile(name: string) {
    if (this.isCached(name)) {
        const {size} = this.getMetadata(name);
        let file = "";
        for (let i = 0; i < size; i++) {
            const chunkName = ModelCacheService.getChunkName(name, i);
            const chunk = await this.cacheDB.bimModels.get(chunkName);
            file += chunk.data;
        }
        return file;
    }
    throw new Error(ModelCacheService.notFoundError);
}

async deleteFile(name: string) {
    await this.cacheDB.bimModels.delete(name);
}

isCached(name: string) {
    const metaName = ModelCacheService.getMetadataName(name);
    const serializedMetadata = this.fastDB.getItem(metaName);
    return serializedMetadata !== null;
}

private saveMetadata(fileName: string, batchCount: number) {
    const metaName = ModelCacheService.getMetadataName(fileName);
    const metadata: Metadata = {name: metaName, size: batchCount};
    const serializedMetadata = JSON.stringify(metadata);
    this.fastDB.setItem(metaName, serializedMetadata);
}

private getMetadata(fileName: string) {
    if (!this.isCached(fileName)) {
        throw new Error(ModelCacheService.notFoundError);
    }
    const metaName = ModelCacheService.getMetadataName(fileName);
    const serialized = this.fastDB.getItem(metaName);
    return JSON.parse(serialized) as Metadata;
}

private batchFile(fileName: string, file: string) {
    const size = Math.ceil(file.length / this.batchSize);
    const chunks: CachedModel[] = [];
    let counter = 0;
    for (let i = 0; i < size; i++) {
        const nextIndex = counter + this.batchSize;
        const isLastChunk = nextIndex > file.length - 1;
        const currentChunkSize = isLastChunk ? file.length - counter : this.batchSize;
        const data = file.substr(counter, currentChunkSize);
        const name = ModelCacheService.getChunkName(fileName, i);
        chunks.push({name, data});
        counter += this.batchSize;
    }
    return chunks;
}
}