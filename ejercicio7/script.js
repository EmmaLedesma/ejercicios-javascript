document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('color-input');
    const elementButtons = document.querySelectorAll('.element-btn');
    
    // Función para cambiar el color de fondo
    function cambiarColor(id, color) {
        const element = document.getElementById(id);
        if (element) {
            element.style.backgroundColor = color;
        }
    }
    
    // Asignar evento a cada botón
    elementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const elementId = button.getAttribute('data-id');
            const selectedColor = colorInput.value;
            cambiarColor(elementId, selectedColor);
            
            // Feedback visual
            button.textContent = `Color aplicado a ${button.textContent.split(' (')[0]}`;
            button.style.backgroundColor = '#2ecc71';
            
            setTimeout(() => {
                button.textContent = button.textContent.replace(' (Color aplicado)', '');
                button.style.backgroundColor = '#3498db';
            }, 1500);
        });
    });
    
  
    const textBoxes = document.querySelectorAll('.text-box');
    textBoxes.forEach(box => {
        box.addEventListener('dblclick', () => {
            const selectedColor = colorInput.value;
            box.style.backgroundColor = selectedColor;
        });
    });
});