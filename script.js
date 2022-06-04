function agregar(id1, id2) {
    let valor = $('#'+id2).val();
    let correjido = valor.split(',');
    let Resultado = `<p>${correjido}</p>`; // lo que se va a agregar al html
    $('#'+id1).append(Resultado);
}

let integrantes = []; // guardo valores de integrantes aca

function calcular(valores, donde1, donde2){
    let valor = $('#'+valores).val();     // Obtengo el valor del input
    integrantes.push(valor); // Agrego valores a lista de integrantes
    let suma = 0; // suma de integrantes inicial
    let promedio = 0;

    // Calculos
    for (let i = 0; i < integrantes.length; i++) {
        suma += (parseFloat(integrantes[i])); // realizo suma de integrantes
        promedio = suma / integrantes.length;
        console.log(suma);
    }

    // Para html
    let Suma = `<p>$${suma}</p>`;
    let Promedio = `<p>$${promedio}</p>`;

    // Agregado a su lugar correspondiente
    $('#'+donde1).append(Suma);
    $('#'+donde2).append(Promedio);
}


// function calcular(valores, donde){
//     let valor = $('#'+valores).val();     // Obtengo el valor del input
//     integrantes.push(valor); // Agrego valores a lista de integrantes
//     let suma = 0; // suma de integrantes inicial

//     // Calculos
//     for (let i = 0; i < integrantes.length; i++) {
//         suma += (parseFloat(integrantes[i])); // realizo suma de integrantes
//         let promedio = suma / integrantes.length;
//         console.log(suma);
//     }

//     // Para html
//     let Suma = `<p>Gasto total: ${suma}</p>`;
//     let Promedio = `<p>Promedio: ${promedio}</p>`;

//     // Agregado a su lugar correspondiente
//     $('#'+donde).append(Suma);
//     $('#'+donde).append(Promedio);
// }