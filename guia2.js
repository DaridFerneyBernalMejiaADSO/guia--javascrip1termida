addEventListener("DOMContentLoaded", ()=>{
   //frase que lo identifique como programador de Software
let texto = " La ciencia de hoy es la tecnologia del mañana "
console.log(texto)
const invertirCadena = texto => texto.split("").reverse().join("");
 
console.log( invertirCadena(texto));
   
})