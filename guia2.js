addEventListener("DOMContentLoaded", ()=>{
   // tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. Martin toma
   // 2/3 del total. Jairo un cuarto del total, y Lorena se queda con el resto. ¿qué parte le corresponde a
   // Lorena?
   let dr= Number(prompt("tapas recojidas"))
   let martin=(2/3)*dr
   let jairo=dr/4
   let mjr=martin+jairo
   let lorena=dr-mjr
   console.log(`la parte que le correspondio a lorena es=${lorena}`)
   
   
})