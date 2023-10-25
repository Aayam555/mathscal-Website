function calculate(){
    const u = document.getElementById("u").value;
    const angle = (Math.PI/180) * document.getElementById("angle").value;
    const g = document.getElementById("g").value;
    let T = document.getElementById("T");
    let H = document.getElementById("H");
    let R = document.getElementById("R");

    T.innerHTML = `T = ${(2*u*Math.sin(angle)/g).toFixed(2)}s`;
    H.innerHTML = `H = ${(((u*Math.sin(angle))**2)/(2*g)).toFixed(2)}m`;
    R.innerHTML = `R = ${(u**2 * Math.sin(2*angle)/g).toFixed(2)}m`;
}