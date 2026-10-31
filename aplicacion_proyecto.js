
 // Constantes vitales

// Funcion para evaluar los signos vitales
function evaluarSigno(tipo, valor, segundoValor = 0) {
    switch (tipo) {
        case 1: // Presion arterial
            if (valor < 90 || valor >= 140 ||
                segundoValor < 60 || segundoValor >= 90) {
                return "Valor que requiere revision";
            } else {
                return "Aproximadamente normal";
            }

        case 2: // Frecuencia cardiaca
            if (valor < 60 || valor > 100) {
                return "Valor que requiere revision";
            } else {
                return "Aproximadamente normal";
            }

        case 3: // Temperatura
            if (valor < 36 || valor > 37.5) {
                return "Valor que requiere revision";
            } else {
                return "Aproximadamente normal";
            }

        case 4: // Saturacion de oxigeno
            if (valor < 95 || valor > 100) {
                return "Valor que requiere revision";
            } else {
                return "Aproximadamente normal";
            }

        case 5: // Frecuencia respiratoria
            if (valor < 12 || valor > 20) {
                return "Valor que requiere revision";
            } else {
                return "Aproximadamente normal";
            }

        default:
            return "Tipo de signo vital no valido";
    }
}

// Funcion para guardar y mostrar el registro
function registroSignosVitales(
    nombre, sistolica, diastolica, frecuencia,
    temperatura, saturacion, respiracion
) {
    // Validar los datos
    if (nombre.trim() === "" ||
        !Number.isFinite(sistolica) || sistolica <= 0 ||
        !Number.isFinite(diastolica) || diastolica <= 0 ||
        !Number.isFinite(frecuencia) || frecuencia <= 0 ||
        !Number.isFinite(temperatura) || temperatura <= 0 ||
        !Number.isFinite(saturacion) || saturacion <= 0 ||
        !Number.isFinite(respiracion) || respiracion <= 0) {

        console.log("Error: verifica los datos ingresados.");
        return;
    }

    // Evaluar cada signo vital
    let resultadoPresion = evaluarSigno(1, sistolica, diastolica);
    let resultadoFrecuencia = evaluarSigno(2, frecuencia);
    let resultadoTemperatura = evaluarSigno(3, temperatura);
    let resultadoSaturacion = evaluarSigno(4, saturacion);
    let resultadoRespiracion = evaluarSigno(5, respiracion);

    // Mostrar el reporte
    console.log("REGISTRO DE SIGNOS VITALES");
    console.log(`Residente: ${nombre}`);
    console.log(`Presion arterial: ${sistolica}/${diastolica} mmHg - ${resultadoPresion}`);
    console.log(`Frecuencia cardiaca: ${frecuencia} lpm - ${resultadoFrecuencia}`);
    console.log(`Temperatura: ${temperatura} °C - ${resultadoTemperatura}`);
    console.log(`Saturacion de oxigeno: ${saturacion}% - ${resultadoSaturacion}`);
    console.log(`Frecuencia respiratoria: ${respiracion} rpm - ${resultadoRespiracion}`);
    
}


 //Para pedir los datos

let nombre = prompt("Ingrese el nombre del residente:");

let sistolica = Number(prompt("Ingrese la presion sistolica:"));
let diastolica = Number(prompt("Ingrese la presion diastolica:"));

let frecuencia = Number(prompt("Ingrese la frecuencia cardiaca:"));

let temperatura = Number(prompt("Ingrese la temperatura:"));

let saturacion = Number(prompt("Ingrese la saturacion de oxigeno:"));

let respiracion = Number(prompt("Ingrese la frecuencia respiratoria:"));

// Registrar los signos vitales

registroSignosVitales(
    nombre,
    sistolica,
    diastolica,
    frecuencia,
    temperatura,
    saturacion,
    respiracion
);

/*APP SALARIO

const VALOR_HORA_EXTRA = 9000;
const LIMITE_SALARIO_ALTO = 2000000;

function calcularSalario(salarioBase, horasExtras) {
    return salarioBase + horasExtras * VALOR_HORA_EXTRA;
}

function estimarSalario(salarioTotal) {
    if (salarioTotal >= LIMITE_SALARIO_ALTO) {
        return "Salario alto";
    } else {
        return "Menor a 2 millones";
    }
}

// Pedimos los datos al usuario
const salarioBase = Number(prompt("Escribe el salario base:"));
const horasExtras = Number(prompt("Escribe las horas extras:"));

const salarioTotal = calcularSalario(salarioBase, horasExtras);

console.log("Salario total: $" + salarioTotal);
console.log(estimarSalario(salarioTotal));*/