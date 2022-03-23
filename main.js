// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10 - WHILE');

//TADY NAPIS CYKLUS
let radaCisel = [];
let i = 0;
while (i <=10){
  radaCisel.push(i);
  i++;
}
console.log(`${radaCisel}`);


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a < - WHILE');

//TADY NAPIS CYKLUS
let radaCisel2 = [];
i = 0; 
while (i <10){
  radaCisel2.push(i);
  i++;
}
console.log(`Podmínka s <: ${radaCisel2}`);
let radaCisel3 = [];
i = 0; 
while (i <=10){
  radaCisel3.push(i);
  i++;
}
console.log(`Podmínka s <=: ${radaCisel3}`);


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0 - WHILE');

//TADY NAPIS CYKLUS
let radaCisel4 = [];
i = 10;
while (i >=0){
  radaCisel4.push(i);
  i = i-1;
}
console.log(`${radaCisel4}`);