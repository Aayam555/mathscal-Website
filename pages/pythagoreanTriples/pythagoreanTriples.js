function calculate(){
  const c = Number(document.getElementById("c").value);
  const result = [];

  for (let a = 1; a<c; a++){
    let b = Math.sqrt(c**2 - a**2);
    if (Number.isInteger(b)){
      result.push({a: a, b: b, c: c});
    }
  }

  const processedResult = [];

  for (let i = 0; i<(result.length/2); i++){
    processedResult.push(result[i]);
  }

  let displayText = "Solutions: {";

  for (let solutionIndex = 0; solutionIndex < processedResult.length; solutionIndex++){
    displayText += `(${processedResult[solutionIndex].a}, ${processedResult[solutionIndex].b}, ${processedResult[solutionIndex].c})`;

    if (solutionIndex == processedResult.length - 1){
      displayText += "}";
    } else{
      displayText += ",<br>";
    }
  }

  const display = document.getElementById("display");

  display.innerHTML = displayText;

}
