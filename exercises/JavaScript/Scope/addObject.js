export function adding (name,ifcClass,objects){
    let newElement = {
        'name' : name,
        'IfcClass' : ifcClass
    }
    
    objects.push(newElement)
    return objects, newElement
}