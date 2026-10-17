// CICLOS WHILE

//let i = 0;

//bucle infinito
/*while (true) {
console.log("llenemos memoria ram")
}*/

//IMPRIMIR 10 NUMEROS CONSECUTIVOS

let i = 0;

while (i <= 10){
    console.log(i);
    i++;
}

//VALIDACION DE CONTRASEÑA

/*let contrasena_servidor = "admin";
let contrasena_usuario = "sena123";

while (contrasena_usuario !== contrasena_servidor){//false
    console.log("Clave incorrecta. Intentalo de nuevo:");
}   
    console.log("¡Bienvenido al sistema!");*/

// APP DE ENTRADA A UN BAR

let edad = 16;

while (edad < 18) {
    console.log("No puedes entra al bar. Eres menor de edad.");
    edad++;
}
console.log("¡Bienvenido al bar!");

//APP DE RIEGO DE PLANTAS

let cantidad_agua = 0;

while (cantidad_agua < 10) {
    console.log("Riegos las plantas con " + cantidad_agua + "litros de agua.");
    cantidad_agua++;
}
console.log("¡Todas las plantas han sido regadas!");



//CICLO DO WHILE

let numero = 11;

do {
    console.log(numero);
    numero++;
}while(numero <= 10);//se ejecuta al menos una ves , aunque la condicion  sea falsa

// SENTENCIA BREAK: permite salir de un bucle antes de que termine

for (let i = 1; i <= 10; i++) {
    if (i=== 2) {
        console.log("Se ha alcanzado el numero 2. saliendo del bucle. ")
        break; //sale del bucle cuando i es igual a 5
    }
    console.log(i);
    
}


 // APP BAR CON BREAK

for (let edad_cliente = 18; edad_cliente <= 20; edad_cliente++) {
    if (edad_cliente < 18) {
        console.log("No puedes entrar al bar. Eres menor de edad.");
        break;
    } else {
        console.log("¡Bienvenido al bar!");
    }
}


//SENTENCIA CONTINUE: SALTA

for (let i = 1; i <= 10; i++) {
    if (i=== 5) {
        console.log(" se salto el numero");
        continue;
        
    }
    console.log(i)
}