// esta fazendo um loop, enquanto o valor for menor q 5, sera adicionado 1
//os numeros maiores q 18. 
/* let pets = Number(prompt("quantos pets voce tem?"));
let i = 0;
let bichos = [];
if(pets===0){
console.log("Que pena! Você pode adotar um pet");
}
else{
    while (i <= pets -1) {
        bichos[i] = prompt("nome do bicho");
        i++;
    } 
}
console.log(bichos); */

const arrayoriginal = [1,2,3,4,5,6,7];
for (const i of arrayoriginal) {
  console.log(i);
}

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (const iterator of arrayOriginal) {
    if (iterator %2===0 ){
        console.log(iterator %2=== arrayOriginal);
    }
    
}
for (const iterator of arrayOriginal){
console.log(iterator / 10);
}

for (const iterator of arrayOriginal) {

}
const arrayoriginal2 = ["a", "b", "c", "d"];
for (const i of arrayoriginal2) {
  console.log(i);
}
