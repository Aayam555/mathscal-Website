const flag = document.querySelector("#flag").getContext("2d");

const join = (P1, P2, n1, n2) => {
    flag.moveTo(n1 + P1[0], n2 - P1[1]);
    flag.lineTo(n1 + P2[0], n2 - P2[1]);
    flag.stroke();
}

const arc = (C, r, n1, n2, anticlockwise) => {
    flag.beginPath();
    flag.arc(n1 + C[0], n2 - C[1], r, 0, Math.PI, anticlockwise);
    flag.stroke();
}

const distance = (P1, P2) => {
    return Math.sqrt((P2[0] - P1[0]) ** 2 + (P2[1] - P1[1]) ** 2);
}

const NEPAL = {
    coordinates: function (l){
        let T = [l / 4, (l * (26 + 15 * Math.sqrt(2))) / (8 * (7 * Math.sqrt(2) - 3))];
        let N = [l / 4, l * (3 * Math.sqrt(2) + 5) / (8 * Math.sqrt(2))];
        let w = distance(T, N);
        return({
        A: [0, 0],
        B: [l, 0],
        C: [0, 4 * (l / 3)],
        D: [0, l],
        E: [l * (Math.sqrt(2) - 1) / Math.sqrt(2), l / Math.sqrt(2)],
        F: [0, l / Math.sqrt(2)],
        G: [l, l / Math.sqrt(2)],
        H: [l / 4, 0],
        I: [l / 4, l * ((4 * Math.sqrt(2) + 2)) / (4 * Math.sqrt(2))],
        J: [0, (l * (8 + 3 * Math.sqrt(2))) / 12],
        K: [l / 2, (l * (8 + 3 * Math.sqrt(2))) / 12],
        L: [l / 4, (l * (8 + 3 * Math.sqrt(2))) / 12],
        M: [l / 4, l * (4 * Math.sqrt(2) + 5) / (8 * Math.sqrt(2))],
        N: N,
        O: [0, (l * (12 * Math.sqrt(2) + 15) / (24 * Math.sqrt(2)))],
        P: [l / 4 - l * (Math.sqrt((11 - 3 * Math.sqrt(2)) / (192))), (l * (12 * Math.sqrt(2) + 15)) / (24 * Math.sqrt(2))],
        Q: [l / 4 + l * (Math.sqrt((11 - 3 * Math.sqrt(2)) / (192))), (l * (12 * Math.sqrt(2) + 15)) / (24 * Math.sqrt(2))],
        R: [l / 4 + Math.sqrt((l ** 2 / 64) * (1 - (3 / (14 - 3 * Math.sqrt(2))) ** 2)), (l * (26 + 15 * Math.sqrt(2))) / (8 * (7 * Math.sqrt(2) - 3))],
        S: [l / 4 - Math.sqrt((l ** 2 / 64) * (1 - (3 / (14 - 3 * Math.sqrt(2))) ** 2)), (l * (26 + 15 * Math.sqrt(2))) / (8 * (7 * Math.sqrt(2) - 3))],
        T: T,
        U: [0, l / (2 * Math.sqrt(2))],
        V: [l*(2*Math.sqrt(2)-1)/(2*Math.sqrt(2)), l/(2*Math.sqrt(2))],
        W: [l/4, l/(2*Math.sqrt(2))],
        A1: [-w, -w],
        B1: [2*w+l, -w],
        E1: [l*((Math.sqrt(2)-1)/(Math.sqrt(2)))+2*w, l/Math.sqrt(2)-w],
        G1: [(l*(3-4*Math.sqrt(2))-6*w*Math.sqrt(2))/(3-4*Math.sqrt(2)), (l/Math.sqrt(2)-w)],
        C1: [-w, w*((7*Math.sqrt(2)-3)/(3*Math.sqrt(2)))+4*l/3]
    })}
}

const FLAG = {
    BORDER: function (n1, n2, l) {
        let c = NEPAL.coordinates(l);
        join(c.A, c.B, n1, n2);
        join(c.B, c.D, n1, n2);
        join(c.F, c.G, n1, n2);
        join(c.C, c.G, n1, n2);
        join(c.A, c.C, n1, n2);
        join(c.A1, c.B1, n1, n2);
        join(c.B1, c.E1, n1, n2);
        join(c.E1, c.G1, n1, n2);
        join(c.G1, c.C1, n1, n2);
        join(c.C1, c.A1, n1, n2);
    },

    Components: {
        MOON: function (n1, n2, l) {
            let c = NEPAL.coordinates(l);
            join(c.H, c.I, n1, n2);
            join(c.J, c.K, n1, n2);
            join(c.J, c.G, n1, n2);
            join(c.R, c.S, n1, n2);
            arc(c.L, distance(c.L, c.N), n1, n2, false);
            arc(c.M, distance(c.M, c.Q), n1, n2, false);
            arc(c.N, distance(c.N, c.M), n1, n2, true);
            arc(c.T, distance(c.T, c.S), n1, n2, true);
            arc(c.T, distance(c.T, c.M), n1, n2, true);

            let r1 = distance(c.T, c.M);
            let r2 = distance(c.T, c.S);
            let h = c.T[0];
            let k = c.T[1];

            let pointsOnMoon = [];

            for (let i = 0; i <= 16; i++) {
                if (i%2 == 0){
                    pointsOnMoon.push([h + r2 * Math.cos(i * (0.19634954)),
                k + r2 * Math.sin(i * (0.19634954))]);
                }

                else if (i%2 == 1){
                    pointsOnMoon.push([h + r1 * Math.cos((i * (0.19634954))),
                k + r1 * Math.sin((i * (0.19634954)))]);
                }
            }

            // console.log([h + r2 * Math.cos(0 * (11.25 * Math.PI / 180)),
            // k + r2 * Math.sin(0 * (11.25 * Math.PI / 180))]);

            for (let i = 0; i < pointsOnMoon.length - 1; i++) {
                join(pointsOnMoon[i], pointsOnMoon[i + 1], n1, n2);
            }
        },

        SUN: function (n1, n2, l){
            let c = NEPAL.coordinates(l);
            arc(c.W, l/8, n1, n2, true);
            arc(c.W, l/8, n1, n2, false);
            arc(c.W, distance(c.L, c.N), n1, n2, true);
            arc(c.W, distance(c.L, c.N), n1, n2, false);
            join(c.H, c.I, n1, n2, l);
            join(c.U, c.V, n1, n2, l);

            let r1 = l/8;
            let r2 = l*((7*Math.sqrt(2)-3)/(24*Math.sqrt(2)));
            let h = l/4;
            let k = l/(2*Math.sqrt(2));

            let pointsOnSun = [];

            for (let i=0; i<=25; i++){
                if (i%2 == 0){
                    pointsOnSun.push([h+r2*Math.cos(i*0.261799), k+r2*Math.sin(i*0.261799)]);
                }

                else if (i%2 == 1){
                    pointsOnSun.push([h+r1*Math.cos(i*0.261799), k+r1*Math.sin(i*0.261799)]);
                }
            }

            for (let i=0; i<pointsOnSun.length-1; i++){
                join(pointsOnSun[i], pointsOnSun[i+1], n1, n2);
            }
        }
    }
}

function border() {
    wipe();
    FLAG.BORDER(100, 350, 250);
}

function moon() {
    wipe();
    FLAG.Components.MOON(-25, 985, 900);
}

function sun() {
    wipe();
    FLAG.Components.SUN(-25, 525, 900);
}

function fullFlag() {
    wipe();
    FLAG.BORDER(100, 350, 250);
    FLAG.Components.MOON(100, 350, 250);
    FLAG.Components.SUN(100, 350, 250);
}

function color() {
    wipe();
    let img = new Image();
    img.onload = function() {
        flag.drawImage(img, 91, 1, 300, 400);
    }

    img.src = "../../images/Flag_of_Nepal.svg"
};



function wipe() {
    flag.reset();
}

