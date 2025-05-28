document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('registroForm');
    const mensajeResultado = document.getElementById('mensajeResultado');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores
        const apellido = document.getElementById('apellido').value.trim();
        const nombre = document.getElementById('nombre').value.trim();
        const dni = document.getElementById('dni').value.trim();
        const sexo = document.getElementById('sexo').value.trim().toUpperCase();
        
        // Validar campos
        let esValido = true;
        
        if (apellido === '') {
            esValido = false;
            alert('El apellido no puede estar vacío');
        }
        
        if (nombre === '') {
            esValido = false;
            alert('El nombre no puede estar vacío');
        }
        
        if (dni === '' || isNaN(dni)) {
            esValido = false;
            alert('El DNI debe ser un número válido');
        }
        
        if (sexo !== 'M' && sexo !== 'F') {
            esValido = false;
            alert('El sexo debe ser M o F');
        }
        
        // Mostrar resultado
        if (esValido) {
            mensajeResultado.textContent = 'Formulario válido. Datos correctos.';
            mensajeResultado.style.backgroundColor = '#e8f8f5';
            mensajeResultado.style.color = '#27ae60';
            
         
            console.log('Datos válidos:', { apellido, nombre, dni, sexo });
        } else {
            mensajeResultado.textContent = 'Por favor corrija los errores en el formulario.';
            mensajeResultado.style.backgroundColor = '#fdecea';
            mensajeResultado.style.color = '#e74c3c';
        }
    });
});