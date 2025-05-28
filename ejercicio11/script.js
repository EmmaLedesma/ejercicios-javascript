document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('registroForm');
    const mensajeResultado = document.getElementById('mensajeResultado');

    // Función de validación
    const validarFormulario = () => {
        // Obtener valores
        const apellido = document.getElementById('apellido').value.trim();
        const nombre = document.getElementById('nombre').value.trim();
        const dni = document.getElementById('dni').value.trim();
        const sexo = document.getElementById('sexo').value.trim().toUpperCase();
        
        // Resetear mensajes de error
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        
        // Validar campos
        let esValido = true;
        
        if (apellido === '') {
            document.getElementById('errorApellido').textContent = 'El apellido no puede estar vacío';
            esValido = false;
        }
        
        if (nombre === '') {
            document.getElementById('errorNombre').textContent = 'El nombre no puede estar vacío';
            esValido = false;
        }
        
        if (dni === '' || isNaN(dni)) {
            document.getElementById('errorDni').textContent = 'El DNI debe ser un número válido';
            esValido = false;
        }
        
        if (sexo !== 'M' && sexo !== 'F') {
            document.getElementById('errorSexo').textContent = 'El sexo debe ser M o F';
            esValido = false;
        }
        
        // Mostrar resultado
        if (esValido) {
            mensajeResultado.textContent = 'Formulario válido. Datos correctos.';
            mensajeResultado.className = 'formulario-valido';
            console.log('Datos válidos:', { apellido, nombre, dni, sexo });
        } else {
            mensajeResultado.textContent = 'Por favor corrija los errores en el formulario.';
            mensajeResultado.className = 'formulario-invalido';
        }
    };

    // Evento submit del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        validarFormulario();
    });

    
    mensajeResultado.addEventListener('mousedown', () => {
        mensajeResultado.style.backgroundColor = '#FFFFCC'; // Amarillo
    });

    document.addEventListener('keydown', () => {
        mensajeResultado.style.backgroundColor = '#CCE6FF'; // Azul
    });

    document.addEventListener('mousemove', () => {
        mensajeResultado.style.backgroundColor = ''; // Volver al color original
    });

    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            const errorElement = document.getElementById(`error${input.name.charAt(0).toUpperCase() + input.name.slice(1)}`);
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    });
});