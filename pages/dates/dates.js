if (localStorage.getItem("Dates") == null){
  localStorage.setItem("Dates", JSON.stringify([]));
}

let count = 0;

function getTimePassed(date){
  const ThatDay = new Date(date);
  const Today = new Date();
  const SecondDiff = (Today - ThatDay);
  const DaysPassed = Math.floor(SecondDiff/86400000);
  const YearPassed = Math.round((SecondDiff/31536000000)*100)/100;
  const MonthPassed = Math.round((SecondDiff/2592000000)*100)/100
  
  return [DaysPassed, MonthPassed, YearPassed];
}


function showDates(count){
  const displayDates = document.getElementById("container");
  let dateInfo = JSON.parse(localStorage.getItem("Dates"))[count];
  let timePassed = getTimePassed(dateInfo["dateInput"]);
  
  let displayHTML = `<div id="display-card" class="img-container card">
    <img id="date-img" src="${dateInfo["dateImage"]}" alt="No Image">
  <div id="date-info">
       <span id="name">${dateInfo["dateName"]}</span>
       <span id="date">${dateInfo["dateInput"]}</span>
       <span id = "passed">Days Passed: ${timePassed[0]} </span>
        <span id = "passed">Months Passed: ${timePassed[1]} </span>
        <span id = "passed">Years Passed: ${timePassed[2]} </span>
       </div>
       <button onclick="deleteDates()" class="btn btn-danger">Delete</button>
         <button onclick="nextButton()" class="btn btn-primary">Next</button>
  </div>
`;
  displayDates.innerHTML = displayHTML;
  
}

function nextButton(){
  const container = document.getElementById("container");
  let dateInfo = JSON.parse(localStorage.getItem("Dates"));
  count++;
  if(count < dateInfo.length){
    showDates(count);
  } else{
    count = 0;
    showDates(count);
  }
}

function addDates(){
  const container = document.getElementById("container");
  container.innerHTML = `<div id="input-card" class="card">
      <div class="input-field">
        <input class="form-control" placeholder="Enter something special about the day" id="dateName" type="text">
        <input class="form-control" placeholder="Enter image url" id="dateImage" type="text">
        <input id="dateInput" class="form-control" type="date">
        <button id="insert-btn" class="btn btn-success" onclick="insertDates()">Insert</button>
        </div>
      </div>`
}

function insertDates(){
  const dateInput = document.getElementById("dateInput").value;
  const dateName = document.getElementById("dateName").value;
  const dateImage = document.getElementById("dateImage").value;
  
  let Dates = localStorage.getItem("Dates");
  Dates = JSON.parse(Dates);
  Dates.push(({
    "dateInput": dateInput,
    "dateName": dateName,
    "dateImage": dateImage
    }));
  Dates = JSON.stringify(Dates);
  localStorage.setItem("Dates", Dates);
  
  dateInput.value = null;
  dateName.value = null;
  dateImage.value = null;
}


function deleteDates(){
  const container = document.getElementById("container");
  let dateInfo = JSON.parse(localStorage.getItem("Dates"));
  dateInfo.splice(count, 1);
  localStorage.setItem("Dates", JSON.stringify(dateInfo));
  if(showDates(count+1)){
    showDates(count+1);
  } else{
    showDates(count-1);
  };
}