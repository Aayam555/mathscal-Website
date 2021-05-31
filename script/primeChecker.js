const check = () => {
  // Getting value from user
  let number = document.getElementById("number").value;

  // Getting display
  let display = document.getElementById("display");

  // Checking prime or composite
  if (number < 1) {
    display.innerHTML = `Invalid Number`;
  } else if (number == 1) {
    display.innerHTML = `1 is non prime and non composite number`;
  } else if (number == 2) {
    display.innerHTML = `${number} is prime`;
  } else if (number % 2 == 0) {
    display.innerHTML = `${number} is composite`;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        display.innerHTML = `${number} is composite`;
        break;
      } else {
        display.innerHTML = `${number} is prime`;
      }
    }
  }
};
