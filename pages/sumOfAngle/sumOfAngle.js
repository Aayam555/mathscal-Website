function sum_of_angles() {
    // taking input from user
    let n = document.getElementById('vertices').value;
    // calculating value for sum of Interior and Exterior angles
    let Interior;
    if (n < 3){
        Interior = `There is no Polygon with ${n} vertices`;
    }
    else{
        Interior = `${(n - 2)*180}&deg;`
    }
    // displaying answer
    document.getElementById('display').innerHTML = `Sum = ${Interior}`;
}