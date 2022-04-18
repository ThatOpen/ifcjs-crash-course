export declare enum IfcEvent {
    onCameraReady = "onCameraReady"
}
export declare type EventEndpoints = {
    [key in IfcEvent]: {
        needsUpdate: boolean;
        published: boolean;
        actions: {
            (): void;
        }[];
    };
};
export declare class IfcEvents {
    private events;
    dispose(): void;
    subscribe(event: IfcEvent, action: (...args: any) => void): void;
    publish(event: IfcEvent): void;
    update(event: IfcEvent): void;
}
