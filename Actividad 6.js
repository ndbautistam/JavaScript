// ACTIVIDAD PRACTICA 6: REFACTORIZAR CON FUNCIONES

// 1. Funcion para calcular el promedio
function calcularPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

// 2. Funcion para clasificar el promedio
function clasificar(promedio) {
    if (promedio >= 4.5) {
        return "Excelente";
    } else if (promedio >= 3.0) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

// 3. Funcion flecha para saber si es mayor de edad
const esMayorDeEdad = (edad) => edad >= 18;

// 4. Funcion para saludar
function saludar(nombre = "Aprendiz") {
    return "Hola " + nombre + ", bienvenido al programa.";
}

// 5. Datos de tres aprendices

const aprendiz1 = {
    nombre: "Laura Gomez",
    nota1: 4.5,
    nota2: 4.0,
    nota3: 4.8,
    edad: 20
};

const aprendiz2 = {
    nombre: "Carlos Perez",
    nota1: 2.5,
    nota2: 3.0,
    nota3: 2.8,
    edad: 17
};

const aprendiz3 = {
    nombre: "Andrea Torres",
    nota1: 3.5,
    nota2: 4.0,
    nota3: 3.8,
    edad: 22
};

// 6. Mostrar resultados de los aprendices

console.log("=== RESULTADOS DE LOS APRENDICES ===");

const aprendices = [aprendiz1, aprendiz2, aprendiz3];

aprendices.forEach((aprendiz) => {

    let promedio = calcularPromedio(
        aprendiz.nota1,
        aprendiz.nota2,
        aprendiz.nota3
    );

    let resultado = clasificar(promedio);
    let mayorEdad = esMayorDeEdad(aprendiz.edad);



// Reto adicional
console.log("-----------------------------");
console.log(saludar());
console.log(saludar("John"));