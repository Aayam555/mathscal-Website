const regularPolygonsCanvas = document.getElementById("regularPolygonsCanvas");
const ctx = regularPolygonsCanvas.getContext("2d");

function coordinate(m, n, a, b, l){
  return {"x": (l*Math.sin((2*Math.PI*(m - 1))/n)/(2*Math.sin(Math.PI/n))+a),
          "y": (l*Math.cos((2*Math.PI*(m - 1))/n)/(2*Math.sin(Math.PI/n))+b)}
}


function drawPolygon(){
  const length = document.getElementById("lengthOfPolygon").value;
  const n = document.getElementById("numberOfSides").value;
  for (let polygonIndex = 1; polygonIndex <= n; polygonIndex++){
    ctx.moveTo(coordinate(polygonIndex, n, regularPolygonsCanvas.width/2, regularPolygonsCanvas.height/2, length)["x"],
               coordinate(polygonIndex, n, regularPolygonsCanvas.width/2, regularPolygonsCanvas.height/2, length)["y"]);
    ctx.lineTo(coordinate(polygonIndex + 1, n, regularPolygonsCanvas.width/2, regularPolygonsCanvas.height/2, length)["x"],
               coordinate(polygonIndex + 1, n, regularPolygonsCanvas.width/2, regularPolygonsCanvas.height/2, length)["y"]);
    ctx.stroke();
  }
}
