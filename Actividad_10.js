
const aprendices = [];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const nota = document.getElementById("nota");
const error = document.getElementById("error");
const tabla = document.getElementById("tabla");
const resumen = document.getElementById("resumen");

// Funcion para clasificar la nota
function clasificar(nota) {

    if (nota >= 3.0) {
        return "Aprobado";
    } else {
        return "No aprobado";
    }

}

// Funcion para validar los datos
function validar(nombre, correo, nota) {

    if (nombre.trim() === "") {
        return "El nombre no puede estar vacio";
    }

    if (!correo.includes("@")) {
        return "El correo debe contener @";
    }

    if (nota === "" || isNaN(nota) || nota < 0 || nota > 5) {
        return "La nota debe ser un numero entre 0 y 5";
    }

    return "";

}

// Funcion para pintar la tabla
function pintarTabla() {

    tabla.innerHTML = "";

    for (let i = 0; i < aprendices.length; i++) {

        let fila = document.createElement("tr");

        let celdaNombre = document.createElement("td");
        let celdaCorreo = document.createElement("td");
        let celdaNota = document.createElement("td");
        let celdaEstado = document.createElement("td");
        let celdaAccion = document.createElement("td");

        celdaNombre.textContent = aprendices[i].nombre;
        celdaCorreo.textContent = aprendices[i].correo;
        celdaNota.textContent = aprendices[i].nota;
        celdaEstado.textContent = aprendices[i].estado;

        // Cambiar color segun el estado
        if (aprendices[i].estado === "Aprobado") {
            fila.classList.add("aprobado");
        } else {
            fila.classList.add("no-aprobado");
        }

        // Crear boton para eliminar
        let botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function() {

            aprendices.splice(i, 1);

            pintarTabla();
            actualizarResumen();

        });

        celdaAccion.appendChild(botonEliminar);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCorreo);
        fila.appendChild(celdaNota);
        fila.appendChild(celdaEstado);
        fila.appendChild(celdaAccion);

        tabla.appendChild(fila);

    }

}

// Funcion para actualizar el resumen
function actualizarResumen() {

    let total = aprendices.length;

    let suma = 0;

    for (let i = 0; i < aprendices.length; i++) {

        suma = suma + aprendices[i].nota;

    }

    let promedio = 0;

    if (total > 0) {
        promedio = suma / total;
    }

    let aprobados = aprendices.filter(function(aprendiz) {

        return aprendiz.estado === "Aprobado";

    }).length;

    resumen.textContent =
        "Total: " + total +
        " | Promedio: " + promedio.toFixed(2) +
        " | Aprobados: " + aprobados;

}

// Evento para registrar aprendices
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nombreIngresado = nombre.value.trim();
    let correoIngresado = correo.value.trim();
    let notaIngresada = nota.value;

    // Validar los datos
    let mensaje = validar(
        nombreIngresado,
        correoIngresado,
        notaIngresada
    );

    if (mensaje !== "") {

        error.textContent = mensaje;
        return;

    }

    // Evitar correos repetidos
    let correoExiste = aprendices.some(function(aprendiz) {

        return aprendiz.correo.toLowerCase() ===
            correoIngresado.toLowerCase();

    });

    if (correoExiste) {

        error.textContent = "Este correo ya esta registrado";
        return;

    }

    // Crear objeto del aprendiz
    let nuevoAprendiz = {

        nombre: nombreIngresado,
        correo: correoIngresado,
        nota: Number(notaIngresada),
        estado: clasificar(Number(notaIngresada))

    };

    // Guardar en el arreglo
    aprendices.push(nuevoAprendiz);

    // Actualizar tabla y resumen
    pintarTabla();
    actualizarResumen();

    // Limpiar formulario
    formulario.reset();

    error.textContent = "";

});
