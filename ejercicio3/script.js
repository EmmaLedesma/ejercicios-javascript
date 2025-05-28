// Función para determinar si un número es par o impar
function esPar(numero) {
    return numero % 2 === 0;
}

// Ingreso de dato
const numero = parseInt(prompt("Por favor, ingrese un número:"));

// Validacion de valor ingresado es un número válido
if (isNaN(numero)) {
    alert("El valor ingresado no es un número válido.");
} else {
    // Determinamos si es par o impar
    const tipo = esPar(numero) ? "par" : "impar";
    
    // Rresultado en un alert con el formato solicitado
    alert(`El número ${numero} es ${tipo}, siendo ${numero} el número ingresado.`);
}