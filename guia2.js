addEventListener("DOMContentLoaded", ()=>{
   // calcular la distancia entre dos puntos
   let x= Number(prompt(`ingrese el primer punto `))
   let y=Number(prompt(`ingrese el segundo punto`))
   let d=rc*(((x*2)-(x*1))**2 + ((y*2)-(y*1))**2)
   console.log(`la distancia que hay entre dos puntos es de = ${d}`)
})