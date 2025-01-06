const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const r = 250;
const k = 1000;
const width = canvas.width;
const height = canvas.height;
let Vertices = [];

function Point(x, y){
    return [x + (width/2), -y + (height/2)];
}

function midpoint(P, Q){
    return [(P[0]+Q[0])/2, (P[1]+Q[1])/2];
}

function Polygon(n){
    for(let i=0; i<=n; i++){
        vertex = [Point(r*Math.sin((2*Math.PI/n)*i), r*Math.cos((2*Math.PI/n)*i))[0], 
                Point(r*Math.sin((2*Math.PI/n)*i), r*Math.cos((2*Math.PI/n)*i))[1]];
        Vertices.push(vertex);
        ctx.lineTo(vertex[0], vertex[1]);
        ctx.stroke();
    }
}
let point = Point(-Math.floor(0.5*r), Math.floor(0.5*r));

function drawPattern(){
    const n = document.getElementById("n").value;
    Polygon(n);
    let mid = midpoint([vertex[0], vertex[1]], [point[0], point[1]]);
    setInterval(function(){
        let random = Math.floor(Math.random()*(Vertices.length));
            ctx.beginPath();
            ctx.arc(mid[0], mid[1], 0.75, 0, 2 * Math.PI);
            ctx.stroke();
        mid = midpoint([Vertices[random][0], Vertices[random][1]], [mid[0], mid[1]]);
    }, 1);
}



