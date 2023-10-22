function hypotenuse() {
    // Get Value From User
    let Perpendicular = document.getElementById('p1').value;
    let Base = document.getElementById('b1').value;
    // Calculate Hypotenuse
    let Hypotenuse = Math.sqrt(Perpendicular**2 + Base**2);
    // Display Answer
    document.getElementById('hp').innerHTML = `Perpendicular = ${Perpendicular}`;
    document.getElementById('hb').innerHTML = `base = ${Base}`;
    document.getElementById('h').innerHTML = `Hypotenuse = ${Hypotenuse}`;

}

function perpendicular() {
    // Get Value From User
    let Hypotenuse = document.getElementById('h1').value;
    let Base = document.getElementById('b2').value;
    // Calculate Perpendicular
    let Perpendicular = Math.sqrt(Hypotenuse**2 - Base**2);
    // Display Answer
    document.getElementById('ph').innerHTML = `Hypotenuse = ${Hypotenuse}`;
    document.getElementById('pb').innerHTML = `Base = ${Base}`;
    document.getElementById('p').innerHTML = `Perpendicular = ${Perpendicular}`;

}

function base() {
    //Get Value From User
    let Hypotenuse = document.getElementById('h2').value;
    let Perpendicular = document.getElementById('p2').value;
    // Calculate Base
    let Base = Math.sqrt(Hypotenuse**2 - Perpendicular**2);
    //Display Answer
    document.getElementById('bh').innerHTML = `Hypotenuse = ${Hypotenuse}`;
    document.getElementById('bp').innerHTML = `Perpendicular = ${Perpendicular}`;
    document.getElementById('b').innerHTML = `Base = ${Base}`;
}