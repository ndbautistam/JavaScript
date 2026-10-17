
 // Punto 1: Tabla de multiplicar

let numero = Number(prompt("Digite un numero:"));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " * " + i + " = " + (numero * i));
}



 // Punto 2: Sumar y contar notas

let nota = Number(prompt("Digita una nota o 0 para terminar:"));
let suma = 0;
let cantidad = 0;

while (nota !== 0) {
    suma = suma + nota;
    cantidad++;

    nota = Number(prompt("Digita otra nota o 0 para terminar:"));
}

console.log("La suma de las notas es: " + suma);
console.log("Cantidad de notas ingresadas: " + cantidad);




 // Punto 3: Calcular el promedio

if (cantidad > 0) {
    let promedio = suma / cantidad;
    console.log("El promedio de las notas es: " + promedio);
} else {
    console.log("No se ingresaron notas para calcular el promedio.");
}



 // Punto 4: Recorrer las fichas

let fichass = ["Ficha 1", "Ficha 2", "Ficha 3", "Ficha 4", "Ficha 5"];
let numeroFicha = 1;

for (let ficha of fichas) {
    console.log(numeroFicha + ". " + ficha);
    numeroFicha++;
}



 // Punto 5: Omitir una ficha con continue

let fichas = ["Ficha 1", "Ficha 2", "Ficha 3", "Ficha 4", "Ficha 5"];

for (let ficha of fichas) {
    if (ficha === "Ficha 3") {
        continue;
    }

    console.log(ficha);
}



 // Reto adicional: Números pares

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}