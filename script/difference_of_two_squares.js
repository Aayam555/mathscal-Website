function calculate(){
    const difference_of_two_squares = Number(document.getElementById("difference_of_two_squares").value);
    const difference_of_a_and_b = Number(document.getElementById("difference_of_a_and_b").value);


    let a = (difference_of_two_squares + difference_of_a_and_b**2)/(2*difference_of_a_and_b);
    let b = (difference_of_two_squares - difference_of_a_and_b**2)/(2*difference_of_a_and_b);

    const display = document.getElementById("display");

    display.innerHTML = `<table class="table table-bordered" id="display-table">
  <thead>
    <tr>
      <th scope="col">(a<sup>2</sup> - b<sup>2</sup>)</th>
      <th scope="col">(a-b)</th>
      <th scope="col">(a, b)</th>
      <th>Result(decimal)</th>
      <th>Result(fraction)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${difference_of_two_squares}</td>
      <td>${difference_of_a_and_b}</td>
      <td>(${a}, ${b})</td>
      <td>(${a})² - (${b})²</td>
      <td>(${(difference_of_two_squares + difference_of_a_and_b**2)}² + ${(difference_of_two_squares - difference_of_a_and_b**2)}²)/${2*difference_of_a_and_b**2}</td>
    </tr>
  </tbody>
</table>
`;
}