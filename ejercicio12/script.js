document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('numeroForm');
    const campoNumerico = document.getElementById('campoNumerico');
    const mensajeResultado = document.getElementById('mensajeResultado');
    const errorNumero = document.getElementById('errorNumero');

    // Función para validar solo números
    function validarNumero(event) {
        const charCode = event.which ? event.which : event.keyCode;
        
        // Permitir: backspace, delete, tab, escape, enter, números y teclado numérico
        if ([8, 9, 13, 27, 46].includes(charCode) || 
            (charCode >= 48 && charCode <= 57) || // Números estándar
            (charCode >= 96 && charCode <= 105)) { // Teclado numérico
            return true;
        }
        
        // Bloquear cualquier otra tecla
        event.preventDefault();
        return false;
    }

    // Función para validar el formulario
    const validarFormulario = (e) => {
        e.preventDefault();
        
        const valor = campoNumerico.value.trim();
        
        // Validar que no esté vacío
        if (valor === '') {
            errorNumero.textContent = 'Por favor ingrese un número';
            mensajeResultado.textContent = 'Campo vacío';
            mensajeResultado.className = 'formulario-invalido';
            return;
        }
        
        // Validar que sea un número (aunque el input lo previene)
        if (isNaN(valor)) {
            errorNumero.textContent = 'Solo se permiten números';
            mensajeResultado.textContent = 'Entrada inválida';
            mensajeResultado.className = 'formulario-invalido';
            return;
        }
        
        // Si pasa las validaciones
        errorNumero.textContent = '';
        mensajeResultado.textContent = `Número válido: ${valor}`;
        mensajeResultado.className = 'formulario-valido';
    };

    // Event listeners
    campoNumerico.addEventListener('keypress', validarNumero);
    formulario.addEventListener('submit', validarFormulario);
    
    // Limpiar error al escribir
    campoNumerico.addEventListener('input', () => {
        errorNumero.textContent = '';
    });
});