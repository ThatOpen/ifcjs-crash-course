let objects =[ {
    'name' : 'Wall 2',
    'ifcClass' : 'IfcWall',
    'dimensions' : null
},
{
    'name' : 'Column',
    'ifcClass' : 'IfcColumn',
    'dimensions' : null 
},
{
    'name' : 'Paving Zahorra ',
    'ifcClass' : 'IfcBuildingElementProxy',
    'dimensions' : null 
},
{
    'name' : 'Roof',
    'ifcClass' : 'IfcSlab',
    'dimensions' : null 
}
]

let lastItem = objects.pop()
lastItem.name = 'Floor 4 Roof'
console.log(lastItem)
console.log(objects)
objects=objects.slice(1,3)
console.log(objects)

objects.push(lastItem)
console.log(objects)

console.log(objects.includes(lastItem))

