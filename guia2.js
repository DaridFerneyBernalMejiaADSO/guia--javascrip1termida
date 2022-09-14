addEventListener("DOMContentLoaded", ()=>{
   // Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes
   // cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total
   // sueldo del vendedor?.
   // comision y sueldo del vendedor
    let smensual= Number(prompt(`ingrese su sueldo mensual`))
    let v1= Number(prompt(`ingrese el valor de la venta 1`))
    let v2= Number(prompt(`ingrese el valor de la venta 2`))
    let v3= Number(prompt(`ingrese el valor de la venta 3`))
    let ventatotal=v1+v2+v3
    let comision=ventatotal*0.10
    console.log(`la comision que saco este mes es de=${comision}`)
    console.log(`el sueldo es de ${smensual+comision}`)
})