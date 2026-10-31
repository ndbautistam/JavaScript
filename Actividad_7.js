
// ACTIVIDAD PRACTICA 7: LISTADO DE LA FICHA

// 1. Arreglo de objetos
const aprendices = [
    { nombre: "Dayana", nota: 4.5 },
    { nombre: "emily", nota: 2.8 },
    { nombre: "John", nota: 3.9 },
    { nombre: "Diego", nota: 3.0 },
    { nombre: "Sofia", nota: 2.5 }
];

// 2. forEach: Para mostrar cada aprendiz
console.log("LISTADO DE APRENDICES");

aprendices.forEach(a => console.log(`${a.nombre}: ${a.nota}`));

// 3. filter: Para mostrar los aprobados
console.log("APRENDICES APROBADOS");

const aprobados = aprendices.filter(a => a.nota >= 3.0);

console.log(aprobados);

// 4. map:  para los nombres en mayuscula
console.log("NOMBRES EN MAYUSCULA");

const nombres = aprendices.map(a => a.nombre.toUpperCase());

console.log(nombres);

// 5. for...of: Para calcular el promedio inicial
let suma = 0;

for (const a of aprendices) {
    suma = suma + a.nota;
}

let promedio = suma / aprendices.length;

console.log("Promedio inicial: " + promedio.toFixed(2));

// 6. push: agregar un sexto aprendiz
aprendices.push({ nombre: "Dayana", nota: 4.2 });

console.log("LISTADO ACTUALIZADO");

aprendices.forEach(a => console.log(`${a.nombre}: ${a.nota}`));

// Calcular el nuevo promedio
suma = 0;

for (const a of aprendices) {
    suma = suma + a.nota;
}

promedio = suma / aprendices.length;

console.log("Promedio final: " + promedio.toFixed(2));

// RETO ADICIONAL: encontrar la nota mas alta
let notaMayor = aprendices[0].nota;
let mejorAprendiz = aprendices[0].nombre;

for (const a of aprendices) {
    if (a.nota > notaMayor) {
        notaMayor = a.nota;
        mejorAprendiz = a.nombre;
    }
}

console.log("MEJOR APRENDIZ");
console.log("Nombre: " + mejorAprendiz);
console.log("Nota: " + notaMayor);
