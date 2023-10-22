const container = document.getElementById("container");

function createHtmlTemplate(displayInputs){
  let htmlTemplate = `
              <div class="card" style="width: 20rem; text-align: center">
              <div class="card-body">
              <h5 class="card-title">${displayInputs.title}</h5>
              <span id="displayResult"></span>`;

  for (let inputIndex = 0; inputIndex < displayInputs.inputs.length; inputIndex++){
    htmlTemplate += `<input type=number class="form-control" id="${displayInputs.inputs[inputIndex].id}" placeholder="${displayInputs.inputs[inputIndex].placeholder}">`
  }

  htmlTemplate += `<button onclick="${displayInputs.functionName}()" class="btn btn-primary">Calculate</button>
                   <hr>
                   <a style="margin-top: -10px" href="./mensuration.html" class="btn btn-danger">Back</a>
                  </div>
                </div>`

  return htmlTemplate;
}

// Equilateral Triangle
function calculateAreaAndPerimeterOfEquilateralTriangle(a){
  return {area: (Math.sqrt(3)/4) * a**2, perimeter: 3*a}
}

function showCardForAreaAndPerimeterOfEquilateralTriangle(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Equilateral Triangle",
      inputs: [
        {
          id: "sideOfEquilateralTriangle",
          placeholder: "Enter side length(a)"
        }
      ],
      functionName: "showResultForAreaAndPerimeterOfEquilateralTriangle"
    }
  );
}
function showResultForAreaAndPerimeterOfEquilateralTriangle(){
  let a = Number(document.getElementById("sideOfEquilateralTriangle").value);
  let result = calculateAreaAndPerimeterOfEquilateralTriangle(a);
  document.getElementById("displayResult").innerText = `Area = ${result.area}, Perimeter = ${result.perimeter}`;
}

// Scalane sideOfEquilateralTriangle
function calculateAreaAndPerimeterOfScalaneTriangle(a, b, c){
  let s = (a + b + c)/2;

  console.log(a, b , c)
  return {area: Math.sqrt(s * (s-a) * (s-b) * (s-c)), perimeter: a+b+c}
}

function showCardForAreaAndPerimeterOfScalaneTriangle(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Scalane Triangle",
      inputs: [
        {
          id: "aOfScalanceTriangle",
          placeholder: "Enter side length(a)"
        },
        {
          id: "bOfScalanceTriangle",
          placeholder: "Enter side length(b)"
        },
        {
          id: "cOfScalanceTriangle",
          placeholder: "Enter side length(c)"
        }
      ],
      functionName: "showResultForAreaAndPerimeterOfScalaneTriangle"
    }
  );
}

function showResultForAreaAndPerimeterOfScalaneTriangle(){
  let a = Number(document.getElementById("aOfScalanceTriangle").value);
  let b = Number(document.getElementById("bOfScalanceTriangle").value);
  let c = Number(document.getElementById("cOfScalanceTriangle").value);
  let result = calculateAreaAndPerimeterOfScalaneTriangle(a, b, c);
  document.getElementById("displayResult").innerText = `Area = ${result.area}, Perimeter = ${result.perimeter}`;
}

// Rectangle
function calculateAreaAndPerimeterOfRectangle(l, b){
  return {
    area: l*b,
    perimeter: 2*(l+b)
  }
}

function showCardForAreaAndPerimeterOfRectangle(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Rectangle",
      inputs: [
        {
          id: "lOfRectangle",
          placeholder: "Enter length(l)"
        },
        {
          id: "bOfRectangle",
          placeholder: "Enter breadth(b)"
        }
      ],
      functionName: "showResultForAreaAndPerimeterOfRectangle"
    }
  );
}

function showResultForAreaAndPerimeterOfRectangle(){
  let l = Number(document.getElementById("lOfRectangle").value);
  let b = Number(document.getElementById("bOfRectangle").value);
  let result = calculateAreaAndPerimeterOfRectangle(l, b);
  document.getElementById("displayResult").innerText = `Area = ${result.area}, Perimeter = ${result.perimeter}`;
}

// Square
function calculateAreaAndPerimeterOfSquare(l){
  return {
    area: l**2,
    perimeter: 4*l
  }
}

function showCardForAreaAndPerimeterOfSquare(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Square",
      inputs: [
        {
          id: "lOfSquare",
          placeholder: "Enter length(l)"
        }
      ],
      functionName: "showResultForAreaAndPerimeterOfSquare"
    }
  );
}

function showResultForAreaAndPerimeterOfSquare(){
  let l = Number(document.getElementById("lOfSquare").value);
  let result = calculateAreaAndPerimeterOfSquare(l);
  document.getElementById("displayResult").innerText = `Area = ${result.area}, Perimeter = ${result.perimeter}`;
}

// Parallelogram
function calculateAreaAndPerimeterOfParallelogram(a, b, h){
  return {
    area: b * h,
    perimeter: 2 * (a + b)
  }
}

function showCardForAreaAndPerimeterOfParallelogram(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Parallelogram",
      inputs: [
        {
          id: "aOfParallelogram",
          placeholder: "Enter side(a)"
        },
        {
          id: "bOfParallelogram",
          placeholder: "Enter base(b)"
        },
        {
          id: "hOfParallelogram",
          placeholder: "Enter height(h)"
        }
      ],
      functionName: "showResultForAreaAndPerimeterOfParallelogram"
    }
  );
}

function showResultForAreaAndPerimeterOfParallelogram(){
  let a = Number(document.getElementById("aOfParallelogram").value);
  let b = Number(document.getElementById("bOfParallelogram").value);
  let h = Number(document.getElementById("hOfParallelogram").value);
  let result = calculateAreaAndPerimeterOfParallelogram(a, b, h);
  document.getElementById("displayResult").innerText = `Area = ${result.area}, Perimeter = ${result.perimeter}`;
}

// Rhombus
function calculateAreaAndPerimeterOfRhombus(l, d1, d2){
  return {
    area: 1/2 * d1 * d2,
    perimeter: 4 * l
  }
}

function showCardForAreaAndPerimeterOfRhombus(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Rhombus",
      inputs: [
        {
          id: "lOfRhombus",
          placeholder: "Enter length(l)"
        },
        {
          id: "d1OfRhombus",
          placeholder: "Enter first diagonal(d1)"
        },
        {
          id: "d2OfRhombus",
          placeholder: "Enter second diagonal(d2)"
        }
      ],
      functionName: "showResultForAreaAndPerimeterOfRhombus"
    }
  );
}

function showResultForAreaAndPerimeterOfRhombus(){
  let l = Number(document.getElementById("lOfRhombus").value);
  let d1 = Number(document.getElementById("d1OfRhombus").value);
  let d2 = Number(document.getElementById("d2OfRhombus").value);
  let result = calculateAreaAndPerimeterOfRhombus(l, d1, d2);
  document.getElementById("displayResult").innerText = `Area = ${result.area}, Perimeter = ${result.perimeter}`;
}

// Quadrilateral
function calculateAreaAndPerimeterOfQuadrilateral(d, h1, h2){
  return {
    area: 1/2 * d * (h1 + h2),
    perimeter: "sum of its four sides"
  }
}

function showCardForAreaAndPerimeterOfQuadrilateral(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Quadrilateral",
      inputs: [
        {
          id: "dOfQuadrilateral",
          placeholder: "Enter diagonal(d)"
        },
        {
          id: "h1OfQuadrilateral",
          placeholder: "Enter first height(h1)"
        },
        {
          id: "h2OfQuadrilateral",
          placeholder: "Enter second height(h2)"
        }
      ],
      functionName: "showResultForAreaAndPerimeterOfQuadrilateral"
    }
  );
}

function showResultForAreaAndPerimeterOfQuadrilateral(){
  let d = Number(document.getElementById("dOfQuadrilateral").value);
  let h1 = Number(document.getElementById("h1OfQuadrilateral").value);
  let h2 = Number(document.getElementById("h2OfQuadrilateral").value);
  let result = calculateAreaAndPerimeterOfQuadrilateral(d, h1, h2);
  document.getElementById("displayResult").innerText = `Area = ${result.area}, Perimeter = ${result.perimeter}`;
}


// Trapezium
function calculateAreaAndPerimeterOfTrapezium(a, b, h){
  return {
    area: 1/2 * h * (a+b),
    perimeter: "sum of its four sides"
  }
}

function showCardForAreaAndPerimeterOfTrapezium(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Trapezium",
      inputs: [
        {
          id: "aOfTrapezium",
          placeholder: "Enter side length(a)"
        },
        {
          id: "bOfTrapezium",
          placeholder: "Enter side length(b)"
        },
        {
          id: "hOfTrapezium",
          placeholder: "Enter height(h)"
        }
      ],
      functionName: "showResultForAreaAndPerimeterOfTrapezium"
    }
  );
}

function showResultForAreaAndPerimeterOfTrapezium(){
  let a = Number(document.getElementById("aOfTrapezium").value);
  let b = Number(document.getElementById("bOfTrapezium").value);
  let h = Number(document.getElementById("hOfTrapezium").value);
  let result = calculateAreaAndPerimeterOfTrapezium(a, b, h);
  document.getElementById("displayResult").innerText = `Area = ${result.area}, Perimeter = ${result.perimeter}`;
}


// Circle and Semicircle
function calculateAreaAndPerimeterOfCircle(r){
  return {
    area: Math.PI * r**2,
    perimeter: 2*Math.PI*r
  }
}

function showCardForAreaAndPerimeterOfCircle(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Circle",
      inputs: [
        {
          id: "rOfCircle",
          placeholder: "Enter Radius(r)"
        }
      ],
      functionName: "showResultForAreaAndPerimeterOfCircle"
    }
  );
}

function showResultForAreaAndPerimeterOfCircle(){
  let r = Number(document.getElementById("rOfCircle").value);
  let result = calculateAreaAndPerimeterOfCircle(r);

  document.getElementById("displayResult").innerText = `Area of circle = ${result.area}, Perimeter of circle = ${result.perimeter}, Area of semicircle = ${1/2 * result.area}, Perimeter of semicircle = ${1/2 * result.perimeter + 2*r}`;
}

// Area of pathways running inside rectangle
function calculateAreaOfPathwaysRunningInside(l, b, d){
  return 2*d*(l + b + 2*d);
}

function showCardForAreaOfPathwaysRunningInside(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Area of Pathways Running Inside",
      inputs: [
        {
          id: "lOfPathwaysRunningInside",
          placeholder: "Enter length(l)"
        },
        {
          id: "bOfPathwaysRunningInside",
          placeholder: "Enter breadth(b)"
        },
        {
          id: "dOfPathwaysRunningInside",
          placeholder: "Enter uniform width(d)"
        }
      ],
        functionName: "showResultForAreaOfPathwaysRunningInside"
    }
  );
}

function showResultForAreaOfPathwaysRunningInside(){
  let l = Number(document.getElementById("lOfPathwaysRunningInside").value);
  let b = Number(document.getElementById("bOfPathwaysRunningInside").value);
  let d = Number(document.getElementById("dOfPathwaysRunningInside").value);
  let result = calculateAreaOfPathwaysRunningInside(l, b, d);

  document.getElementById("displayResult").innerText = `Area = ${result}`;
}


// Area of pathways running outside rectangle
function calculateAreaOfPathwaysRunningOutside(l, b, d){
  return 2*d*(l + b - 2*d);
}

function showCardForAreaOfPathwaysRunningOutside(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Area of Pathways Running Outside",
      inputs: [
        {
          id: "lOfPathwaysRunningOutside",
          placeholder: "Enter length(l)"
        },
        {
          id: "bOfPathwaysRunningOutside",
          placeholder: "Enter breadth(b)"
        },
        {
          id: "dOfPathwaysRunningOutside",
          placeholder: "Enter uniform width(d)"
        }
      ],
        functionName: "showResultForAreaOfPathwaysRunningOutside"
    }
  );
}

function showResultForAreaOfPathwaysRunningOutside(){
  let l = Number(document.getElementById("lOfPathwaysRunningOutside").value);
  let b = Number(document.getElementById("bOfPathwaysRunningOutside").value);
  let d = Number(document.getElementById("dOfPathwaysRunningOutside").value);
  let result = calculateAreaOfPathwaysRunningOutside(l, b, d);

  document.getElementById("displayResult").innerText = `Area = ${result}`;
}

// Area of path's crossing each other perpendicularly
function calculateAreaOfPathCrossingEachOtherPerpendicularly(l, b, d){
  return d*(l + b - d);
}

function showCardForAreaOfPathCrossingEachOtherPerpendicularly(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Area of path's crossing each other perpendicularly",
      inputs: [
        {
          id: "lOfPathCrossingEachOtherPerpendicularly",
          placeholder: "Enter length(l)"
        },
        {
          id: "bOfPathCrossingEachOtherPerpendicularly",
          placeholder: "Enter breadth(b)"
        },
        {
          id: "dOfPathCrossingEachOtherPerpendicularly",
          placeholder: "Enter uniform width(d)"
        }
      ],
        functionName: "showResultForAreaOfPathwaysRunningOutside"
    }
  );
}

function showResultForAreaOfPathwaysRunningOutside(){
  let l = Number(document.getElementById("lOfPathCrossingEachOtherPerpendicularly").value);
  let b = Number(document.getElementById("bOfPathCrossingEachOtherPerpendicularly").value);
  let d = Number(document.getElementById("dOfPathCrossingEachOtherPerpendicularly").value);
  let result = calculateAreaOfPathCrossingEachOtherPerpendicularly(l, b, d);

  document.getElementById("displayResult").innerText = `Area = ${result}`;
}

// Area of path running outside a circular field
function calculateAreaOfPathRunningOutsideCircularField(r, d){
  return Math.PI * d * (2*r + d);
}

function showCardForAreaOfPathRunningOutsideCircularField(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Area of path running outside a circular field",
      inputs: [
        {
          id: "rOfPathRunningOutsideCircularField",
          placeholder: "Enter radius(r)"
        },
        {
          id: "dOfPathRunningOutsideCircularField",
          placeholder: "Enter uniform width(d)"
        }
      ],
        functionName: "showResultForAreaOfPathRunningOutsideCircularField"
    }
  );
}

function showResultForAreaOfPathRunningOutsideCircularField(){
  let r = Number(document.getElementById("rOfPathRunningOutsideCircularField").value);
  let d = Number(document.getElementById("dOfPathRunningOutsideCircularField").value);
  let result = calculateAreaOfPathRunningOutsideCircularField(r, d);

  document.getElementById("displayResult").innerText = `Area = ${result}`;
}

// Area of path running outside a circular field
function calculateAreaOfPathRunningInsideCircularField(r, d){
  return Math.PI * d * (2*r - d);
}

function showCardForAreaOfPathRunningInsideCircularField(){
  container.innerHTML = createHtmlTemplate(
    {
      title: "Area of path running inside a circular field",
      inputs: [
        {
          id: "rOfPathRunningInsideCircularField",
          placeholder: "Enter radius(r)"
        },
        {
          id: "dOfPathRunningInsideCircularField",
          placeholder: "Enter uniform width(d)"
        }
      ],
        functionName: "showResultForAreaOfPathRunningInsideCircularField"
    }
  );
}

function showResultForAreaOfPathRunningOutsideCircularField(){
  let r = Number(document.getElementById("rOfPathRunningInsideCircularField").value);
  let d = Number(document.getElementById("dOfPathRunningInsideCircularField").value);
  let result = calculateAreaOfPathRunningInsideCircularField(r, d);

  document.getElementById("displayResult").innerText = `Area = ${result}`;
}
