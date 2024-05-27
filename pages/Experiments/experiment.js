const EXPERIMENTS = [
  {
    name: "Total Internal Reflection",
    img: ["TIR1.jpg", "TIR2.jpg"]
  },
  
  {
    name: "Refraction",
    img: ["refraction1.jpg", "refraction2.jpg"]
  },
  
  {
    name: "Showing wave nature of light",
    img: ["wpd1.jpg", "wpd2.jpg"]
  }
];

const display = document.getElementById("display");

for(i in EXPERIMENTS){
  let e = `<div class="card">
                <h2 class="name">${EXPERIMENTS[i].name}</h2>
                <div class="images">
            `;
  for(j in EXPERIMENTS[i].img){
    let src = "../../images/Experiments/" + EXPERIMENTS[i].img[j];
    e += `<img class="img" src="${src}" />`
  }
  e += "</div></div>";
  display.innerHTML += e;
}


