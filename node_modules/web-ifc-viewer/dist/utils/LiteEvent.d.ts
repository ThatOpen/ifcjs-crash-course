export interface ILiteEvent<T> {
    on(handler: T extends void ? {
        (): void;
    } : {
        (data: T): void;
    }): void;
    off(handler: T extends void ? {
        (): void;
    } : {
        (data: T): void;
    }): void;
}
export declare class LiteEvent<T> implements ILiteEvent<T> {
    private handlers;
    on(handler: T extends void ? {
        (): void;
    } : {
        (data: T): void;
    }): void;
    off(handler: T extends void ? {
        (): void;
    } : {
        (data: T): void;
    }): void;
    trigger: T extends void ? {
        (): void;
    } : {
        (data: T): void;
    };
    expose(): ILiteEvent<T>;
}
