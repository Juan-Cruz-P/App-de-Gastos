function agregar() {

    $('#lista').empty();
    let valor = $('#nombre').val();
    let lista = valor.split(',');

    for (let i = 0; i < lista.length; i++) {
        let textoResultante = `<h1> ${lista[i]}</h1>`; // lo que se va a agregar al html
        $('#lista').append(textoResultante); 
    }
}