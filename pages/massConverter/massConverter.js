// Function to convert kg to g
const kgtog = () => {
  // Getting value from user
  let kg = document.getElementById("kgtog").value;

  // Converting Kg to g
  let g = kg * 1000;

  // Displaying g
  document.getElementById("displaykgtog").innerHTML = `${kg}kg = ${g}g`;
};

// Function to convert kg to cg
const kgtocg = () => {
  // Getting value from user
  kg = document.getElementById("kgtocg").value;

  // Converting kg to cg
  let cg = kg * 100000;

  // Displaying cg
  document.getElementById("displaykgtocg").innerHTML = `${kg}kg = ${cg}cg`;
};

// Function to convert kg to mg
const kgtomg = () => {
  // Getting value from user
  kg = document.getElementById("kgtomg").value;

  // Converting kg to mg
  let mg = kg * 1000000;

  // Displaying mg
  document.getElementById("displaykgtomg").innerHTML = `${kg}kg = ${mg}mg`;
};

// Function to convert g to kg
const gtokg = () => {
  // Getting value from user
  let g = document.getElementById("gtokg").value;

  // Converting g to kg
  let kg = g / 1000;

  // Displaying kg
  document.getElementById("displaygtokg").innerHTML = `${g}g = ${kg}kg`;
};

// Function to convert g to cg
const gtocg = () => {
  // Getting value from user
  let g = document.getElementById("gtocg").value;

  // Converting g to cg
  let cg = g * 100;

  // Displaying cg
  document.getElementById("displaygtocg").innerHTML = `${g}g = ${cg}cg`;
};

// Function to convert g to mg
const gtomg = () => {
  // Getting value from user
  let g = document.getElementById("gtomg").value;

  // Converting g to mg
  let mg = g * 1000;

  // Displaying mg
  document.getElementById("displaygtomg").innerHTML = `${g}g = ${mg}mg`;
};

// Function to convert cg to g
const cgtog = () => {
  // Getting value from user
  let cg = document.getElementById("cgtog").value;

  // Converting cg to g
  let g = cg / 100;

  // Displaying g
  document.getElementById("displaycgtog").innerHTML = `${cg}cg = ${g}g`;
};

// Function to convert cg to kg
const cgtokg = () => {
  // Getting value from user
  let cg = document.getElementById("cgtokg").value;

  // Converting cg to kg
  let kg = cg / 100000;

  // Displaying kg
  document.getElementById("displaycgtokg").innerHTML = `${cg}cg = ${kg}kg`;
};

// Funtion to convert cg to mg
const cgtomg = () => {
  // Getting value from user
  let cg = document.getElementById("cgtomg").value;

  // Converting cg to mg
  let mg = cg * 10;

  // Displaying mg
  document.getElementById("displaycgtomg").innerHTML = `${cg}cg = ${mg}mg`;
};

// Function to convert mg to g
const mgtog = () => {
  // Getting value from user
  let mg = document.getElementById("mgtog").value;

  // Converting to g
  let g = mg / 1000;

  // Displaying g
  document.getElementById("displaymgtog").innerHTML = `${mg}mg = ${g}g`;
};

// Function to convert mg to cg
const mgtocg = () => {
  // Getting value from user
  let mg = document.getElementById("mgtocg").value;

  // Converting to cg
  let cg = mg / 10;

  // Displaying cg
  document.getElementById("displaymgtocg").innerHTML = `${mg}mg = ${cg}cg`;
};

// Function to convert mg to kg
const mgtokg = () => {
  // Getting value from user
  let mg = document.getElementById("mgtokg").value;

  // Converting to cg
  let kg = mg / 1000000;

  // Displaying cg
  document.getElementById("displaymgtokg").innerHTML = `${mg}mg = ${kg}kg`;
};
