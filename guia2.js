addEventListener("DOMContentLoaded", ()=>{
   let t= Number(prompt("ingrese el tiempo")) 
   let h= Number(prompt("ingrese la altura")) 
   let r= Number(prompt("ingrese el radio")) 
   let volumen=Math.PI*(r**2)*h 
   let Q= volumen/t 
   console.log(`el volumen es =${volumen}`) 
   console.log(`el caudal es=${Q}`)

})