// Función para analizar una cadena de texto
function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas";
    } else {
        return "La cadena es una mezcla de mayúsculas y minúsculas";
    }
}


const texto = prompt("Ingrese una cadena de texto para analizar:");


if (texto === null || texto.trim() === "") {
    alert("No ingresó ningún texto");
} else {
   
    const resultado = analizarCadena(texto);
    alert(resultado);
}