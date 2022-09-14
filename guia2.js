addEventListener("DOMContentLoaded", ()=>{
//llamada telefonica
let t = Number(prompt(`Cuanto tiempo duraste`))
let preciom = Number(prompt(`precio del minuto`))
let iva=preciom*0.20
let vtotal=(t*preciom)+iva
console.log(`el precio del minuto es =${vtotal}`)
})
    
