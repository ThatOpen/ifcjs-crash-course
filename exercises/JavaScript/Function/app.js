import {adding} from './addObject.js'

let objects = []

objects = adding('Object 1', 'IfcBuildingElementProxy', objects)
objects = adding('Object 4', 'IfcWall', objects)
objects = adding('Object 5', 'IfcSlab', objects)
objects = adding('Object 8', 'IfcWallStandardCase', objects)
objects = adding('Object 30', 'IfcWall', objects)
objects = adding('Object 8', 'IfcBuildingElementProxy', objects)
objects = adding('Object 47', 'IfcBuildingElementProxy', objects)
objects = adding('Object 3', 'IfcSystem', objects)

console.log(objects)