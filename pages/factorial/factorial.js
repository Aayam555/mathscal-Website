function factorial(n){
    let fact=1n;
    for(let i=1n; i<=n; i++){
        fact*=i;
    }
    return fact;
}

function calculate(){
    const displayFactorial = document.getElementById("displayFactorial");
    const numberInput = document.getElementById("numberInput").value;
    const digits = document.getElementById("digits");
    fact = factorial(numberInput);
    displayFactorial.innerText = fact;
    digits.innerText = `Number of digits = ${String(fact).length}`;
}