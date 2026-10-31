//Seleccionar los Elementos del DOM

let entrada = document.getElementById("entrada");
let btnAgregar = document.getElementById("btnAgregar");
let contador = document.getElementById("contador");
let lista = document.getElementById("lista");
let contadorCaracteres = document.getElementById("contadorCaracteres");
let mensaje = document.getElementById("mensaje");

let total = 0;
let nombres = []; // Arreglo para evitar repetidos

// Evento input: caracteres en tiempo real
entrada.addEventListener("input", function(){
    contadorCaracteres.innerText = "Caracteres: " + entrada.value.length;
    mensaje.innerText = "";
});

btnAgregar.addEventListener("click", function(){
    let nombre = entrada.value.trim(); //Input

    if(nombre == ""){ //Validamos el nombre que no este Vacio
        alert("Escriba un Nombre");
        return;
    }

    // Validar repetidos con includes (sin distinguir mayúsculas)
    let clave = nombre.toLowerCase();
    if(nombres.includes(clave)){
        mensaje.innerText = '"' + nombre + '" ya está en la lista.';
        return;
    }
    nombres.push(clave);

    let li = document.createElement("li"); //Creamos la etiqueta <li>

    let span = document.createElement("span");
    span.innerText = nombre; //Asignamos el nombre del Input
    li.appendChild(span);

    // Click en el <li>: alterna la clase tachado
    li.addEventListener("click", function(){
        li.classList.toggle("tachado");
    });

    // Reto: botón Eliminar con remove()
    let btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.addEventListener("click", function(e){
        e.stopPropagation(); // evita que también se tache
        nombres = nombres.filter(function(n){ return n !== clave; });
        li.remove();
        total--;
        contador.innerText = "Aprendices: " + total;
    });
    li.appendChild(btnEliminar);

    lista.appendChild(li); //Agregamos un elemento <li> al <ul>
    total++;

    contador.innerText = "Aprendices: " + total;
    entrada.value = ""; //Limpiar el Input nuevamente
    contadorCaracteres.innerText = "Caracteres: 0";
    mensaje.innerText = "";
    entrada.focus(); //Ubica el puntero en el Input
});


//Filtrado Dinamico con JavaScript

let filterInput = document.getElementById("filterInput"); //Entrada
let listaFiltrada = document.getElementById("lista"); //Salida

filterInput.addEventListener("keyup", function(){
    let term = filterInput.value.toLowerCase(); //Convertir el Texto en Minusculas
    let items = listaFiltrada.getElementsByTagName("li"); //Capturando todos los <li>

    Array.from(items).forEach(function(item){
        let nombreItem = item.querySelector("span").textContent.toLowerCase();
        if(nombreItem.indexOf(term) !== -1){
            item.style.display = ""; //Muestra el Item de la Lista
        }else {
            item.style.display = "none"; //Oculta el Item de la Lista
        }
    })
});