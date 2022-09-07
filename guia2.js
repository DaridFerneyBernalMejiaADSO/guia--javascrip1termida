addEventListener("DOMContentLoaded", ()=>{
    // 5. Escribir un programa que calcule la longitud y el área de una circunferencia: Radio = 4
    // Longitud de la circunferencia = 2 * PI * radio
    // Área de la circunferencia = PI * radio˄2


    let radio = Number(prompt("Ingrese el radio de la circunferencia", 5));


    console.group(`Formula ${2} * ${Math.PI} * ${radio}`);

        console.log(`Longitud de la circunferencia : "${2 * Math.PI * radio}"`);
    console.groupEnd();

    console.group(`Formula ${Math.PI} * ${Math.pow(radio, 2)}`);
        console.log(`Área de la circunferencia : "${Math.PI * Math.pow(radio, 2)}"`);
    console.groupEnd();
})
    
