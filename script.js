function agregar() {

    $('#nombre-a').empty();
    $('#gasto-a').empty();
    let valor1 = $('#nombre').val();
    let lista1 = valor1.split(',');

    let valor2 = $('#gasto').val();
    let lista2 = valor2.split(',');

    for (let i = 0; i < lista1.length; i++) {
        let textoResultante1 = ` ${lista1[i]}`; // lo que se va a agregar al html
        $('#nombre-a').append(textoResultante1); 

        let textoResultante2 = ` ${lista2[i]}`; // lo que se va a agregar al html
        $('#gasto-a').append(textoResultante2); 
    }
}