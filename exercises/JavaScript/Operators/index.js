let pillarHeight = 3.50 //m
let pillarBaseArea = 0.5 * 0.5 //m2

let pillarVolume = pillarHeight * pillarBaseArea //m3
const weightReinforcement = 1.5 //Kg 

let reiforcementRatio = (pillarVolume == 0) || weightReinforcement/pillarVolume
console.log(reiforcementRatio)