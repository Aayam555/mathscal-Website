function midpoint() {
    //Taking Input from User
    let x1 = parseInt(document.getElementById('x1').value);
    let y1 = parseInt(document.getElementById('y1').value)
    let x2 = parseInt(document.getElementById('x2').value)
    let y2 = parseInt(document.getElementById('y2').value)

    //Calculating Midpoit
    let x = (x1 + x2) / 2;
    let y = (y1 + y2) / 2;

    //Displaying Midpoint

    document.getElementById('display').innerHTML = `Midpoint of (${x1},${y1})&(${x2},${y2}) = (${x},${y})`;
}

