const entr1 = require('readline-sync');
let numer: number = entr1.question('Digite um numero positivo: ');

let i = 0;

while(i<= numer)
{
    console.log(i)
    i = i+2
 
}