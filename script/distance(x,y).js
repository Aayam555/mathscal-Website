function distance() {
    // Taking value from user
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;
    let y1 = document.getElementById('y1').value;
    let y2 = document.getElementById('y2').value;
    
    // Calculating Distance
    let DistanceDec = Math.sqrt(((x2-x1)**2) + (y2-y1)**2);
    let DistanceRoot = ((x2-x1)**2) + ((y2-y1)**2);
    // Showing Result

    document.getElementById('displayRoot').innerHTML = `In Root: &Sqrt;${DistanceRoot}`;
    document.getElementById('displayDec').innerHTML = `In Decimal: ${DistanceDec}`;
}