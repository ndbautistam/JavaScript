//Funciones

//Función simple
//declaro la función
function saludar(){
    console.log("Hola mundo")
};
//llamar la funcións
saludar();

//función con parámetros
function saludoPersonalizado (nombre, apellido){
  
     console.log(`hola ${nombre} ${apellido}`)
}
saludoPersonalizado(" Dayana", "Bautista");
saludoPersonalizado(" Miguel", "Caceres");
saludoPersonalizado(" Diana", "Catillo");
saludoPersonalizado(" AMORRRR", "mio");

//funcion con parametros por defeto
function bienvenidaSena(nombre, programa="ADSO"){
    console.log(`Hola Aprendiz ${nombre} del programa ${programa}`)
}
bienvenidaSena("felipe");
bienvenidaSena("pepito","Mineria");

//funcion con parametros desordenados

function calcularEdad(nombre, anioNacimiento){
    let edad= 2026 - anioNacimiento;
    console.log(`Hola ${nombre}, tu edad es ${edad} años`)
}
calcularEdad ("Felipe", 1994);
calcularEdad ("Dayana", 2002);
calcularEdad ("John", 1999);

//Función con retorno de valor 
function calcularPromedio(num1, num2, num3){
    let resultado= (num1 + num2 + num3) / 3;
    return resultado;
}
let result = calcularPromedio (4,5,3)
console.log(`El resultado del promedio es: ${result}`);

//Calculadora 

function sumar(num1, num2){
    return num1 + num2;
}
function restar(num1, num2){
    return num1 - num2;
}
function  multiplicar(num1, num2){
    return num1 * num2;
}
function dividir(num1, num2){
    return num1 /num2;
}

function calculadora(num1, num2, opcion){
switch(opcion){
    case 1:
        return sumar(num1, num2);
    case 2:
        return restar(num1, num2);
    case 3:
        return multiplicar(num1, num2);
    case 4:
        return dividir(num1, num2);
    default: 
        return "Opcion no Valida";
    }
}
console.log(calculadora(5,3,1)); //sumar 
console.log(calculadora(10,3,2)); //restar
console.log(calculadora(9,5,3)); //Multiplicar
console.log(calculadora(20,2,4)); //Dividir
