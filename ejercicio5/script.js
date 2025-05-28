// Función para capitalizar la primera letra y dejar el resto en minúsculas
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Función principal para formatear y mostrar los datos
function MostrarNombreApellido(nombre, apellido) {
    const resultadoElement = document.getElementById('resultado');
    
    // Validación de entrada
    if (!nombre || !nombre.trim() || !apellido || !apellido.trim()) {
        resultadoElement.innerHTML = `
            <p class="error-message">
                Error: Debe ingresar tanto nombre como apellido válidos.
            </p>
            <button onclick="location.reload()" class="retry-btn">Intentar nuevamente</button>
        `;
        return;
    }

    // Formateamos los datos
    const nombreFormateado = capitalizar(nombre.trim());
    const apellidoFormateado = apellido.trim().toUpperCase();

    // Mostramos el resultado
    resultadoElement.innerHTML = `
        <p class="success-message">
            <strong>Resultado formateado:</strong><br>
            ${apellidoFormateado}, ${nombreFormateado}
        </p>
    `;
}

// Solicitamos los datos al usuario al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const nombre = prompt("Por favor, ingrese su nombre:");
    const apellido = prompt("Por favor, ingrese su apellido:");
    
    MostrarNombreApellido(nombre, apellido);
});