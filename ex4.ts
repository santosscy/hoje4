const entr4= require("readline-sync");

let ant = 0;
let prx = 1;
let i = 0
while ( i <= 10 ){
    i++

    let f = ant + prx;

   console.log(f);

    prx = ant
    ant = f
} 