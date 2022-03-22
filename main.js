// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

//TADY NAPIS CYKLUS
let radaCisel = [];
for (i = 0; i <=10; i++){
  radaCisel.push(i);
}
console.log(`${radaCisel}`);


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS
let radaCisel2 = [];
for (i = 0; i <10; i++){
  radaCisel2.push(i);
}
console.log(`Podmínka s <: ${radaCisel2}`);
let radaCisel3 = [];
for (i = 0; i <=10; i++){
  radaCisel3.push(i);
}
console.log(`Podmínka s <=: ${radaCisel3}`);


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS
let radaCisel4 = [];
for (i = 10; i >=0; i = i-1){
  radaCisel4.push(i);
}
console.log(`${radaCisel4}`);