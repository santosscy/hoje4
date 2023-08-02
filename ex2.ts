const entr2 = require("readline-sync");
let media = 0;

let i = 0;

while(i < 5){
    i++

    let valor = parseFloat(entr2.question('Digite a nota: '));
    
    media = media + valor;

}

console.log(media/5)