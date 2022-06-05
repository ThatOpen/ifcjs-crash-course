import {adding} from './addObject.js'

let objects = []

adding('Object 1', 'IfcBuildingElementProxy', objects)
adding('Object 4', 'IfcWall', objects)
adding('Object 5', 'IfcSlab', objects)
adding('Object 8', 'IfcWallStandardCase', objects)
adding('Object 30', 'IfcWall', objects)
adding('Object 8', 'IfcBuildingElementProxy', objects)
adding('Object 47', 'IfcBuildingElementProxy', objects)
adding('Object 3', 'IfcSystem', objects)

console.log(objects)