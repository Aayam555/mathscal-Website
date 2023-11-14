const calculateSlope = () => {
  // Getting Values
  let x1 = document.getElementById("x1").value;
  let y1 = document.getElementById("y1").value;
  let x2 = document.getElementById("x2").value;
  let y2 = document.getElementById("y2").value;

  // Calculating Slope
  let slope = (y2 - y1) / (x2 - x1);

  // Displaying Slope
  document.getElementById("display").innerHTML = `Slope = ${slope}`;
};
