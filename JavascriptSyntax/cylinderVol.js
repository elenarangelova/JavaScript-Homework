
function calcCylinderVol(r, h) {
    var area = Math.pow(r, 2) * Math.PI;
    var volume = area * h;
    console.log(Math.round(volume * 1000) / 1000);
}

calcCylinderVol(2, 4);
calcCylinderVol(5, 8);
calcCylinderVol(12, 3);