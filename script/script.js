function dark() {
  const numberOfElm = 18;

  document.querySelector("body").style =
    "background-color: rgba(25, 25, 25, 1)";

  for (let listElmIndex = 0; listElmIndex <= numberOfElm; listElmIndex++){
    document.querySelectorAll(".changeColor")[listElmIndex].style = "background-color: #333333; color: white;";
  }

  document.getElementById("creator").style = "color: white;";
  document.querySelector("input").style = "background-color: black; color: white;";
}
