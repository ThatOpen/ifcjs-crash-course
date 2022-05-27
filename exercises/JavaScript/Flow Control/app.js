let ifcObjects = {
    4 : {'class' : 'IfcWallStandardCase', 'name': 'Wall 2 Floor 1'},
    6 : {'class' : 'IfcWallStandardCase', 'name': ' Wall 1 Floor 2'},
    5678 : {'class' : 'IfcSystem', 'name': 'heater ','objectLocation' : {'x' : 100, 'y' : 250, 'z' : 0 }},
    4654 :{'class' : 'IfcSlab', 'name': 'Floor 4'},
    5764411 :{'class' : 'IfcBuildingElementProxy', 'name': 'Flowerpot'}
}

const searchId = 5678
const searchClass = {'newClass':'IfcSystem'}
let objectExtract = []


let objectLocation = {}
for ( let objectId in ifcObjects){
    if (parseInt(objectId) === searchId){

        objectLocation =  ifcObjects[objectId].objectLocation
    }
}

const newClass = {
    'class' : searchClass.newClass,
    'name' : 'New Heater',
    'location' : objectLocation
}

const newExpresId = 49463246
ifcObjects[newExpresId] = newClass

console.log(ifcObjects)
