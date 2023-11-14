function calculateArithmetic(){
    const a = Number(document.getElementById("aa").value);
    const d = Number(document.getElementById("d").value);
    const n = Number(document.getElementById("an").value);
    let anthterm = document.getElementById("anthterm");
    let asum = document.getElementById("asum");
    let alist = document.getElementById("alist");

    anthterm.innerHTML = `t<sub>${n}</sub> = ${a+(n-1)*d}`;
    asum.innerHTML = `S<sub>${n}</sub> = ${n/2 * (2*a + (n-1)*d)}`;
    let displayText = '';
    for (let i=1; i<=3; i++){
        displayText += a + (i-1)*d;
        if (i != 3){
            displayText += ", ";
        } else{
            displayText += "...";
        }
    }

    alist.innerHTML = displayText;
}

function calculateGeometric(){
    const a = Number(document.getElementById("ga").value);
    const r = Number(document.getElementById("r").value);
    const n = Number(document.getElementById("gn").value);
    let gnthterm = document.getElementById("gnthterm");
    let gsum = document.getElementById("gsum");
    let glist = document.getElementById("glist");


    gnthterm.innerHTML = `t<sub>n</sub> = ${a*(r**(n-1))}`;
    gsum.innerHTML = `S<sub>n</sub> = ${a*(r**n - 1)/(r-1)}`;

    let displayText = '';
    for (let i=1; i<=3; i++){
        displayText += a*(r**(n-1));
        if (i != 3){
            displayText += ", ";
        } else{
            displayText += "...";
        }
    }

    glist.innerHTML = displayText;
}