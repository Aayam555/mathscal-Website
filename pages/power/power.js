function power() {
    // Taking value from user
    let base = document.getElementById('i1').value 
    let exponent = document.getElementById('i2').value 
    // Calculating
    let power = base**exponent
    // Displaying
    document.getElementById('display').innerHTML = `${base}^${exponent} = ${power}`
}