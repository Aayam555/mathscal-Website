// For °C To °F
function CtoF() {
  //Taking Input from User
  let C = document.getElementById("CtoF").value;
  // Converting
  let F = (C * 9) / 5 + 32;
  //Displaying
  document.getElementById("displayCtoF").innerHTML = `${C}°C = ${F}°F`;
}

//For °F To °C
function FtoC() {
  //Taking Input from User
  let F = document.getElementById("FtoC").value;
  // Converting
  let C = ((F - 32) * 5) / 9;
  //Displaying
  document.getElementById("displayFtoC").innerHTML = `${F}°F = ${C}°C`;
}

// For °F to K
function FtoK() {
  //Taking Input from User
  let F = document.getElementById("FtoK").value;
  // Converting
  let K = ((F - 32) * 5) / 9 + 273;
  //Displaying
  document.getElementById("displayFtoK").innerHTML = `${F}°F = ${K} K`;
}

// For K to °F
function KtoF() {
  //Taking Input from User
  let K = document.getElementById("KtoF").value;
  // Converting
  let F = ((K - 273) * 9) / 5 + 32;
  //Displaying
  document.getElementById("displayKtoF").innerHTML = `${K}K = ${F}°F`;
}

// For K to °C
function KtoC() {
  //Taking Input from User
  let K = document.getElementById("KtoC").value;
  // Converting
  let C = K - 273;
  //Displaying
  document.getElementById("displayKtoC").innerHTML = `${K}K = ${C}°C`;
}

// For °C to K
function CtoK() {
  //Taking Input from User
  let C = parseInt(document.getElementById("CtoK").value);
  //Displaying
  document.getElementById("displayCtoK").innerHTML = `${C}°C = ${273 + C}K`;
}
