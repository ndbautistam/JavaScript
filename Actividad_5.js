// 1. Pedir la nota y convertirla en numero
let nota = Number(prompt("Digita tu nota de 0 a 5: "));

// 2. Validar la nota y clasificar el desempeño
let clasificacion = "Bueno";

if (nota < 0 || nota > 5) {
    console.log("Nota no valida. Debe estar entre 0 y 5.");
} else if (nota >= 4.5) {
    clasificacion = "Excelente";
    console.log("Tu desempeño es EXCELENTE");
} else if (nota >= 3.5) {
    clasificacion = "Bueno";
    console.log("Tu desempeño es BUENO");
} else if (nota >= 3.0) {
    clasificacion = "Aceptable";
    console.log("Tu desempeño es ACEPTABLE");
} else {
    clasificacion = "Debe reforzar";
    console.log("Debes reforzar tus conocimientos");
}

// 3. Crear el menu
let opcion = Number(prompt(
    "MENU PRINCIPAL\n" +
    "1. Ver horario\n" +
    "2. Consultar notas\n" +
    "3. Salir\n" +
    "Elige una opcion:"
));

// 4. Responder al menu utilizando switch
switch (opcion) {
    case 1:
        console.log("Tu horario de clases es de lunes a viernes.");
        break;

    case 2:
        if (nota >= 0 && nota <= 5) {
            console.log("Tu nota es: " + nota);
            console.log("Tu clasificacion es: " + clasificacion);
        } else {
            console.log("No puedes consultar la clasificacion porque la nota no es valida.");
        }
        break;

    case 3:
        console.log("Gracias por utilizar el programa. Hasta pronto.");
        break;

    default:
        console.log("Opcion no valida. Elige 1, 2 o 3.");
        break;
}
