
const editableObject ={
    'name' : 'Wall 2',
    'ifcClass' : 'IfcWall',
    'dimensions' : null
}

console.log(editableObject.dimensions)
editableObject['dimensions'] = {
    'long' : 3,
    'width' : 0.5
}
editableObject.dimensions.height = 3

console.log(editableObject)