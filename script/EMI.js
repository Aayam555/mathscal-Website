
function calculate(){
    //Taking Input From user
    let P = document.getElementById('P').value;
    let R = document.getElementById('R').value;
    let N = document.getElementById('N').value;

    //Calculating
    R = R/(12*100);
    let EMI = (P*R*((R+1)**N))/(((R+1)**N)-1); //Formula

    // Displaying
    document.getElementById('displayEMI').innerHTML = `EMI = ${EMI}`;
}