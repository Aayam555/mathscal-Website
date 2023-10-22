function f (equation, x){
    newEquation = "";
    for (let i in equation){
        if (equation[i] == "x"){
            newEquation += x;
        } else if (equation[i] == "^"){
            newEquation += "**";
        } else{
            newEquation += equation[i];
        }

    }
    return newEquation;
}

function differentiate (){
    let equation = document.getElementById("equation").value;
    let valueOfX = Number(document.getElementById("valueOfX").value);
    let result =  Math.round((eval(f(equation, valueOfX+0.01))
    - eval(f(equation, valueOfX)))/0.01);

    document.getElementById("display").innerHTML = `Ans: ${result}`;

}

