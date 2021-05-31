const calculateMean = () => {
  // Getting Value
  let sumX = document.getElementById("sumX").value;
  let number = document.getElementById("number").value;

  // Calculating Mean
  let mean = sumX / number;

  // Displaying Mean
  document.getElementById("display").innerHTML = `Mean = ${mean}`;
};
