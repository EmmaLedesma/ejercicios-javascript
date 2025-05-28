//arreglo
const diasSemana = [
    "",
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
];


document.write("<h2>Días de la semana:</h2>");
document.write("<ul>"); 
for (let i = 1; i < diasSemana.length; i++) {
    document.write(`<li>Día ${i}: ${diasSemana[i]}</li>`);
}

document.write("</ul>");