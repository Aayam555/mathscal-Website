function random() {
  // getting input from user
  raw_max = document.getElementById("max").value;
  raw_min = document.getElementById("min").value;
  max = Math.floor(raw_max);
  min = Math.ceil(raw_min);
  // Generating Random Number
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  // Displaying Random Number
  document.getElementById("display").innerHTML = `Random Number:<br /> ${num}`;
}
