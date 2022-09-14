addEventListener("DOMContentLoaded", ()=>{
   // Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por
   // $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le
   // sobran $91000. ¿cuánto dinero tenía?
let llave=11500
let bomba=1168000
let caja=87000
let tllaves=llave*5
let tcajas=caja*3
let tpago=tllaves+bomba+tcajas
console.log(`el dinero  total que pago=${tpago}`)
console.log(`dinero total que tenia=${tpago+91000}`)
})