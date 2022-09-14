addEventListener("DOMContentLoaded", ()=>{
   // . Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
   // pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código
   // que representen el algoritmo para solucionar este problema.
   // Al final debe entregar el nombre de la persona entrevistada en mayúscula sostenida y minunscula
   // sostenida y la edad del entrevistado.
let nombre=(prompt("digite su nombre="))
let nacimiento=Number(prompt("su año de nacimiento "))
let añoactual=2022
console.log(`persona entrevistada=${nombre}`)
console.log(`edad de la personja entrevistada=${añoactual-nacimiento}`)
   
})