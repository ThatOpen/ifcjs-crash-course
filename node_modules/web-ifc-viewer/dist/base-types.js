export var NavigationModes;
(function (NavigationModes) {
    NavigationModes[NavigationModes["Orbit"] = 0] = "Orbit";
    NavigationModes[NavigationModes["FirstPerson"] = 1] = "FirstPerson";
    NavigationModes[NavigationModes["Plan"] = 2] = "Plan";
})(NavigationModes || (NavigationModes = {}));
export var CameraProjections;
(function (CameraProjections) {
    CameraProjections[CameraProjections["Perspective"] = 0] = "Perspective";
    CameraProjections[CameraProjections["Orthographic"] = 1] = "Orthographic";
})(CameraProjections || (CameraProjections = {}));
export class IfcComponent {
    constructor(context) {
        context.addComponent(this);
    }
    update(_delta) { }
}
export var dimension;
(function (dimension) {
    dimension["x"] = "x";
    dimension["y"] = "y";
    dimension["z"] = "z";
})(dimension || (dimension = {}));
//# sourceMappingURL=base-types.js.map