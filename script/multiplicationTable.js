const generate = () => {
  // Getting Value from user
  let number = document.getElementById("number").value;
  let table = document.getElementById("table").value;

  //   Generate Multiplication Table
  let multiplicationTable = "";

  for (let i = 1; i <= table; i++) {
    multiplicationTable += `${number} x ${i} = ${number * i} <br>`;
  }

  //   Displaying Multiplication Table
  document.getElementById("display").innerHTML = multiplicationTable;
};
