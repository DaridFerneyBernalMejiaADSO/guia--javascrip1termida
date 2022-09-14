addEventListener("DOMContentLoaded", ()=>{
   // Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
   // descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
   // de la compra.
   // Pablo compro 5 productos
   let p1 = Number(prompt(`ingrese el precio del producto 1`))
   let p2 = Number(prompt(`ingrese el precio del producto 2`))
   let p3 = Number(prompt(`ingrese el precio del producto 3`))
   let p4 = Number(prompt(`ingrese el precio del producto 4`))
   let p5 = Number(prompt(`ingrese el precio del producto 5`))
   let d1=p1*0.05
   let d2=p2*0.05
   let d4=p4*0.02
   let d5=p5*0.02
   let tp1=p1-d1
   let tp2=p2-d2
   let tp3=p3
   let tp4=p4-d4
   let tp5=d5
   let valortotal=tp1+tp2+tp3+tp4+tp5
   console.log(`total a pagar producto 1=${tp1}`)
   console.log(`total a pagar producto 2=${tp2}`)
   console.log(`total a pagar producto 3=${tp3}`)
   console.log(`total a pagar producto 5=${tp4}`)
   console.log(`total a pagar producto 5=${tp5}`)
   console.log(`total a pagar por todos los productos${valortotal}`)

})