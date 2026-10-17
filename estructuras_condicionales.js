//Estructuras Condicionales 
//if

if (true){
    //Bloque de código
}

//Ejemplo de if
let evidencia = 1.0;
if (evidencia >= 3.5){
    console.log("El resultado es APROVADO");
}else{
    console.log("El resultado No fue APROVADO JAJAAJA, Perdiste por vago")
}

//if - else if
let edad = 70;

if (edad <=13){//FALSE
    console.log("Eres un NIÑO");
}else if (edad <=18){
    console.log("Eres un ADOLECENTE");  
}else if  (edad<=60){
     console.log("Eres un ADULTOOOO ");  
}else{
    console.log("Eres un ADULTO MAYOR VIEJITOOO");
}

//ejemplo de If anidado pension
let edadActual = 20;
let semanas_cotizadas = 1000;
let genero = "Masculino";

if (genero == "Femenino") {
    if (edadActual >= 45) {
        if (semanas_cotizadas >= 1250) {
            console.log("Felicidades, te pensionaste");
        } else {
            console.log("Lo siento, no tienes las semanas suficientes para pensionarte");
        }
    } else {
        console.log("Lo siento, no tienes la edad suficiente para pensionarte");
    }

} else if (genero == "Masculino") {
    if (edadActual >= 62) {
        if (semanas_cotizadas >= 1300) {
            console.log("Felicidades, te pensionaste");
        } else {
            console.log("Lo siento, no tienes las semanas suficientes para pensionarte");
        }
    } else {
        console.log("Lo siento, no tienes la edad suficiente para pensionarte");
    }

} else {
    console.log("Género no válido");}

    //condicional con Operadores logicos

    //inicio de sesion- login
    let correo = "sena@gmail.com";
    let contraseña = "12345";

    if (correo  == "sena@gmail.com" && contraseña == "12345"){
        console.log("Bienvenido al sistema");
    }else{
        console.log("Correo o Contraseña Incorrecto")
    }

    //Condicional con Operadores Logicos OR

    //Proceso de certificación Sena


    let etapa_lectiva = true;
    let etapa_practica = false;

    if (etapa_lectiva || etapa_practica){
        console.log("Congratulations on getting certified.")
    }else{
        console.log ("i am sorry, You do not meet the certification requirements. ")
    }


    //operador ternario
    let nota = 3.6;
    let resultado =  (nota >=3.5)? "APROBADO": "NO APROBADO";
    console.log(resultado);

    //SWITCH










    
    // RETO: CALCULADORA CON UN MENU MANEJADO CON UN SWITCH

    let numero_1 = Number(prompt("Digita el numero 1: "));
    let numero_2 = Number(prompt("Digita el numero 2: "));

    let opcion = Number(prompt(
        "Digita el numero de la opcion que corresponda:\n" +
        "1. Sumar\n" +
        "2. Restar\n" +
        "3. Multiplicar\n" +
        "4. Dividir"
    ));

    switch (opcion) {
        case 1:
            console.log(`La suma entre ${numero_1} y ${numero_2} es igual a: ${numero_1 + numero_2}`);
            break;

        case 2:
            console.log(`La resta entre ${numero_1} y ${numero_2} es igual a: ${numero_1 - numero_2}`);
            break;

        case 3:
            console.log(`La multiplicacion entre ${numero_1} y ${numero_2} es igual a: ${numero_1 * numero_2}`);
            break;

        case 4:
            if (numero_2 !== 0) {
                console.log(`La division entre ${numero_1} y ${numero_2} es igual a: ${numero_1 / numero_2}`);
            } else {
                console.log("Error: no se puede dividir entre cero");
            }
            break;

        default:
            console.log(`La opcion ${opcion} no es valida`);
}
