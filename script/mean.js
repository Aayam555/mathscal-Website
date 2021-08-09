const calculateMean = () => {
  // Getting Value
  let data = document.getElementById("data").value;

  // Extracting the data from the user input
  let dataArrayString = data.split(",");

  let dataArrayInt = [];

  for (let dataArrayIndex = 0; dataArrayIndex<dataArrayString.length; dataArrayIndex++){
    dataArrayInt.push(parseInt(dataArrayString[dataArrayIndex].trim()));
  }

  // Calculating the sum of data
  let sumX = 0

  for (let dataIndex = 0; dataIndex < dataArrayInt.length; dataIndex++){
    sumX += dataArrayInt[dataIndex];
  }

  // Calculating Mean
  let mean = sumX/dataArrayString.length;

  // Displaying Mean
  document.getElementById("display").innerHTML = `Mean = ${mean}`;
};
