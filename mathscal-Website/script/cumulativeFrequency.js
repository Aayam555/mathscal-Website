const cumulative = () => {
  let data = document.getElementById("data").value;
  let name = document.getElementById("name").value;

  const arrData = data.split(" ");
  const numData = arrData.map((n) => parseInt(n));

  const display = document.getElementById("display");
  let table = `<table class="table table-striped table-bordered">
    <thead>
    <tr>
    <th scope="col">${name}</th>
    <th scope="col">Frequency</th>
    <th scope="col">Cumulative Frequency</th>
  </tr>
</thead>`;

  let frequency = [];
  let cumulativeFrequency = [];

  const result = numData.reduce(
    (json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }),
    {}
  );

  console.log(Object.keys(result).length);
  let objectkeys = Object.keys(result);
  console.log(result);

  for (let f = 0; f < Object.keys(result).length; f++) {
    frequency.push(result[objectkeys[f]]);
  }

  let firstElement = frequency[0];
  cumulativeFrequency.push(firstElement);

  for (let c = 1; c < frequency.length; c++) {
    cumulativeFrequency.push(firstElement + frequency[c]);
    firstElement = firstElement + frequency[c];
  }

  console.log(firstElement);

  table += "<tbody>";
  for (let i = 0; i < Object.keys(result).length; i++) {
    table += `
         <tr>
            <td>${objectkeys[i]}</td>
            <td>${frequency[i]}</td>
            <td>${cumulativeFrequency[i]}</td>
          </tr>`;
  }

  console.log(cumulativeFrequency);
  table += "</body> </table>";
  display.innerHTML = table;
};
