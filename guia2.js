addEventListener("DOMContentLoaded", ()=>{
   // Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
   // se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando
   // presupuestos para cada cliente.
let m2= Number(prompt("precio del metro cuadrado"))
let tm= Number(prompt("cuantos metros son"))
console.log(`el trabajo para su pintura es de=${m2*tm}`)
   
})