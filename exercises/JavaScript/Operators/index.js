let pillarHeight = 3.5 //m
let pillarAreaBase = 0.5*0.5 //m2

let pillarVolume = pillarHeight * pillarAreaBase //m3
const weightReinforcement = 1.5 //kg

let reinforcementRatio = (pillarVolume == 0) || weightReinforcement/pillarVolume
console.log(reinforcementRatio)

pillarHeight = 0 //m
pillarVolume = pillarHeight * pillarAreaBase //m3


reinforcementRatio = (pillarVolume == 0) || weightReinforcement/pillarVolume
console.log(reinforcementRatio)