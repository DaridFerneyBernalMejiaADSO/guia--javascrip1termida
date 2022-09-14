addEventListener("DOMContentLoaded", ()=>{
   // Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del
   // producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el
   // tiempo y de un producto a otro, este dato se lee por teclado.
   // el prducto y el iva precio 
   let productop=Number(prompt(`ingrese el precio del producto`))
   iva=productop*0.20
console.log(`el iva en el producto es de=${iva}`)
console.log(`el valor total a pagar es de=${productop+iva}`)
})
    
