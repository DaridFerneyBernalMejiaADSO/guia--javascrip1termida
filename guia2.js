addEventListener("DOMContentLoaded", ()=>{
  //  calcular el promedio final
 // . Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se
// compone de los siguientes porcentajes:
// • 55% del promedio final de sus calificaciones de los tres(3) parciales.
// • 30% de la calificación examen final y
// • 15% de la calificación trabajo final.
let p1 =Number(prompt(`ingrese la nota del parcial 1`))
let p2 =Number(prompt(`ingrese la nota del parcial 2`))
let p3 =Number(prompt(`ingrese la nota del parcial 3`))
let ef =Number(prompt(`ingrese la calificacion del examen final`))
let tf =Number(prompt(`ingrese la calificacion del  trabajo final`))
let calificaciones=(p1+p2+p3)/3
let ptcalificaciones=calificaciones*0.55
let examenf=ef*0.30
let trabajof=tf*0.15
let promediofinal=ptcalificaciones+examenf+trabajof
console.log(`el promedio final es= ${promediofinal}`)
})
    
