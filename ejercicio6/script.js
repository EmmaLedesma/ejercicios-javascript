document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    
    calculateBtn.addEventListener('click', () => {
        // Obtener valores de los inputs
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        
        // Validar que los números sean válidos
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = 'Por favor ingrese números válidos';
            resultDiv.className = 'result-container error';
            return;
        }
        
        // Obtener la operación seleccionada
        const operation = document.querySelector('input[name="operation"]:checked').value;
        let result;
        let operationSymbol;
        
        // Realizar la operación según la selección
        switch(operation) {
            case 'suma':
                result = num1 + num2;
                operationSymbol = '+';
                break;
            case 'resta':
                result = num1 - num2;
                operationSymbol = '-';
                break;
            case 'multiplicacion':
                result = num1 * num2;
                operationSymbol = '×';
                break;
            case 'division':
                if (num2 === 0) {
                    resultDiv.textContent = 'No se puede dividir por cero';
                    resultDiv.className = 'result-container error';
                    return;
                }
                result = num1 / num2;
                operationSymbol = '÷';
                break;
            default:
                result = 'Operación no válida';
        }
        
        // Mostrar el resultado
        resultDiv.innerHTML = `
            <strong>Resultado:</strong><br>
            ${num1} ${operationSymbol} ${num2} = <span class="result-value">${result}</span>
        `;
        resultDiv.className = 'result-container success';
    });
});