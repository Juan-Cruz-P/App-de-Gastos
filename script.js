const btn = document.getElementById('agregar');
let integrantes = []; // guardo valores de integrantes aca


function agregar(id1, id2) {
    let valor = $('#'+id2).val();
    if (typeof valor != 'string'){
        let Resultado = `<p>${valor}</p>`;
        $('#'+id1).append(Resultado)}
    else{
        let Resultado = `<p>$${valor}</p>`;
        $('#'+id1).append(Resultado)};}


function limpiar(id){
    btn.addEventListener('click', function handleClick(event){
        event.preventDefault(); // Evita restart
        const Input = document.getElementById(id);
        Input.value = ''; // limpia input field
        });}

btn.addEventListener("keypress", function(event) { // No logre hacer funcionar
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("agregar").click();}});

function calcular(valores, id1, id2){
    let valor = $('#'+valores).val();    // Obtengo el valor del input
    console.log(valor)
    if (valor != ''){
        integrantes.push(valor);             // Agrego valores a lista de integrantes
        let suma = 0;                        // suma de integrantes inicial
        let promedio = 0;                    // promedio de integrantes inicial

        // Calculos
        for (const i of integrantes) {
            suma += (parseFloat(i));                    // realizo suma de integrantes
            promedio = suma / integrantes.length;}      // realizo promedio de integrantes

        // Para html
        $("p").remove('.p');                            // Quito valores previos (no logre hallar forma generalizada, improvise)
        let Suma = `<p class="p">$${suma}</p>`;         // Suma que devuelve
        let Promedio = `<p class="p">$${promedio}</p>`; // Promedio que devuelve

        // Agregado a su lugar correspondiente
        $('#'+id1).append(Suma);
        $('#'+id2).append(Promedio);}

    else if(valor == '')
    {alert("No se ingresaron los datos correspondientes");}}