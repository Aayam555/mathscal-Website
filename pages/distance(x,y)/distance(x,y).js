function desmos(x1, y1, x2, y2){
  let elt = document.getElementById('calculator');
  let calculator = Desmos.GraphingCalculator(elt, {forceEnableGeometryFunctions: true});
  calculator.setExpression({ id: 'coordinate-A', latex: `A = (${x1}, ${y1})`, showLabel: true });
  calculator.setExpression({ id: 'coordinate-B', latex: `B = (${x2}, ${y2})`, showLabel: true });
  calculator.setExpression({ id: 'AB', latex: `polygon (A,B)` });
  calculator.setExpression({ id: 'distance-AB', latex: `distance (A,B)` });
  console.log(elt)

}


function distance() {
    // Taking value from user
    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;
    let y1 = document.getElementById('y1').value;
    let y2 = document.getElementById('y2').value;

    // Calculating Distance
    let distanceRoot = (x2-x1)**2 + (y2-y1)**2;
    let distanceDec = Math.sqrt(distanceRoot);

    // Showing Result
    document.getElementById('displayRoot').innerHTML = `In Root: &Sqrt;${distanceRoot}`;
    document.getElementById('displayDec').innerHTML = `In Decimal: ${distanceDec}`;
    document.getElementById('desmos').innerHTML = `
      <div class="calculator-container">
          <div id="calculator"></div>
      </div>`;

    desmos(x1, y1, x2, y2);
}
