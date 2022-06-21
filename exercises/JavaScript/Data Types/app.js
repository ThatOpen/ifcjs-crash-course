let objectData ={
    "expressID": 186,
    "type": [],
    "GlobalId": {
        "type": 1,
        "value": "2idC0G3ezCdhA9WVjWemc$"
    },
    "OwnerHistory": {},
    "Name": {
        "type": 1,
        "value": "Muro b\\X2\\00E1\\X0\\sico:Partici\\X2\\00F3\\X0\\n con capa de yeso:163541"
    },
    "Description": null,
    "ObjectType": {},
    "ObjectPlacement": {},
    "Representation": {},
    "Tag": {},
    "psets": [
        {
            "expressID": 253,
            "type": 1451395588,
            "GlobalId": {
                "type": 1,
                "value": "3LVpPLOTD8Y8ACz1_oabXX"
            },
            "OwnerHistory": {},
            "Name": {
                "type": 1,
                "value": "Pset_ReinforcementBarPitchOfWall"
            },
            "Description": null,
            "HasProperties": [
                {
                    "expressID": 252,
                    "type": 3650150729,
                    "Name": {
                        "type": 1,
                        "value": "Reference"
                    },
                    "Description": null,
                    "NominalValue": {
                        "type": 2,
                        "label": "IFCLABEL",
                        "valueType": 1,
                        "value": "Partici\\X2\\00F3\\X0\\n con capa de yeso"
                    },
                    "Unit": null
                }
            ]
        },
    ],
    "mats": []
}

function createPset(objectData){
    let newPset = {}
    newPset.expressID = 254
    newPset.type = objectData.psets[0].type
    newPset.GlobalId ={
        'type' : 1,
        'value' : "3LVpPLOTD8Y8ACz1_IFCJS"
    }
    newPset.OwnerHistory = {}
    newPset.Name = {
        'type' : 1,
        'value' : 'Pset_Ifcjs'
    }
    newPset.Description = null
    newPset.HasProperties = []

    return newPset
}

let newPset = createPset(objectData)
objectData.psets = [...objectData.psets, ...[newPset]]
console.log(objectData)
newPset.Name.value = 'Pset_Edit'
console.log(objectData)



