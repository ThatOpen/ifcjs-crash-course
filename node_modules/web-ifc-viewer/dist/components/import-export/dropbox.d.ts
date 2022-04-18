import { IfcComponent } from '../../base-types';
import { IfcManager } from '../ifc';
import { IfcContext } from '../context';
export declare class DropboxAPI extends IfcComponent {
    private tid?;
    private counter;
    private loader;
    constructor(context: IfcContext, loader: IfcManager);
    initializeAPI(): void;
    loadDropboxIfc(): void;
    openDropboxChooser(options: any): void | null;
    private errorOnConnection;
    private onDBChooserSuccess;
    private getOptions;
    private onDBChooserCancel;
}
