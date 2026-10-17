
// Promedio de notas

// Pedir las tres notas y convertirlas a números
let nota1 = Number(prompt("Ingrese la primera nota:"));
let nota2 = Number(prompt("Ingrese la segunda nota:"));
let nota3 = Number(prompt("Ingrese la tercera nota:"));

// Calcular el promedio y redondearlo a un decimal
let promedio = Number(((nota1 + nota2 + nota3) / 3).toFixed(1));
console.log(promedio);

// Comparar si aprobó
let aprobo = promedio >= 3.0;
console.log(aprobo);

// Mostrar el resultado
console.log(`El aprendiz obtuvo un promedio de ${promedio}. ¿Aprobó? ${aprobo}`);

// Calcular los puntos que le faltan para llegar a 3.0
let faltan = 0;

if (promedio < 3.0) {
    faltan = Number((3.0 - promedio).toFixed(1));
}

console.log(`Le faltan ${faltan} puntos para llegar a 3.0`);
