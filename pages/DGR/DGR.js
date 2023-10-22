// Function to convert from degree to grade
const dtog = () => {
  // Get value from user
  let degree = document.getElementById("dtog").value;

  // Converting into grade
  let grade = degree * (10 / 9);

  // Displaying grade
  document.getElementById(
    "displaydtog"
  ).innerHTML = `${degree}&deg; = ${grade}<sup class="grade-symbol">g</sup>`;
};

// Function to convert from degree to radian
const dtor = () => {
  // Get value from user
  let degree = document.getElementById("dtor").value;

  // Converting into radian
  let pi = Math.PI;
  let radian = degree * (pi / 180);

  // Displaying radian
  document.getElementById(
    "displaydtor"
  ).innerHTML = `${degree}&deg; = ${radian}<sup class="radian-symbol">c</sup>`;
};

// Function to convert from grade to degree
const gtod = () => {
  // Get value from user
  let grade = document.getElementById("gtod").value;

  // Converting into degree
  let degree = grade * (9 / 10);

  // Displaying degree
  document.getElementById(
    "displaygtod"
  ).innerHTML = `${grade}<sup class="grade-symbol">g</sup> = ${degree}&deg;`;
};

// Function to convert from grade to radian
const gtor = () => {
  // Get value from user
  let grade = document.getElementById("gtor").value;

  // Converting into radian
  let pi = Math.PI;
  let radian = grade * (pi / 200);

  // Displaying radian
  document.getElementById(
    "displaygtor"
  ).innerHTML = `${grade}<sup class="grade-symbol">g</sup> = ${radian}<sup class="radian-symbol">c</sup>`;
};

// Function to convert from radian to degree
const rtod = () => {
  // Get value from user
  let radian = document.getElementById("rtod").value;

  // Converting into degree
  let pi = Math.PI;
  let degree = radian * (180 / pi);

  // Displaying degree
  document.getElementById(
    "displayrtod"
  ).innerHTML = `${radian}<sup class="radian-symbol">c</sup> = ${degree}&deg;`;
};

// Function to convert from radian to grade
const rtog = () => {
  // Get value from user
  let radian = document.getElementById("rtog").value;

  // Converting into grade
  let pi = Math.PI;
  let grade = radian * (200 / pi);

  // Displaying grade
  document.getElementById(
    "displayrtog"
  ).innerHTML = `${radian}<sup class="radian-symbol">c</sup> = ${grade}<sup class="grade-symbol">g</sup>`;
};
