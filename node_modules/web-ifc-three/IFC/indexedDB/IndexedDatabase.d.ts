export declare enum DBOperation {
    transferIfcModel = 0,
    transferIndividualItems = 1
}
export declare class IndexedDatabase {
    save(item: any, id: DBOperation): Promise<any>;
    load(id: number): Promise<any>;
    private createSchema;
    private saveItem;
    private loadItem;
    private static getDBItems;
    private static openOrCreateDB;
    private static closeDB;
}
