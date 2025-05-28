document.addEventListener('DOMContentLoaded', () => {
    const continueLink = document.getElementById('continue-link');
    const hiddenPart = document.getElementById('hidden-part');
    
    continueLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        // Cambiar la clase del párrafo oculto
        if (hiddenPart.classList.contains('oculto')) {
            hiddenPart.classList.remove('oculto');
            hiddenPart.classList.add('visible');
            continueLink.textContent = 'Mostrar menos';
        } else {
            hiddenPart.classList.remove('visible');
            hiddenPart.classList.add('oculto');
            continueLink.textContent = 'Continuar leyendo...';
        }
        
        // Ocultar el enlace después de mostrar todo (opcional)
        // continueLink.style.display = 'none';
    });
});