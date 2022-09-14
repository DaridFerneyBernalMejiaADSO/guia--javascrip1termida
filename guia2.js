addEventListener("DOMContentLoaded", ()=>{
   // Calcular el sueldo de un empleado dados comodatos de entrada: el nombre, hrs. De trabajo y el pago
   // en hora. Pagohora=15300
   //sueldo de un empleado
   let htrabajo= Number(prompt(`ingrese las horas trabajadas`))
   let phora=Number(prompt(`ingrese el precio por horas`))
   let nombre=prompt(`ingrese el nombre`)
   console.log(`el señor ${nombre}`)
   console.log(`el sueldo del empleado es de =${htrabajo*phora}`)
 
})
    
