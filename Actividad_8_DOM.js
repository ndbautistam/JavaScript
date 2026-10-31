//paso 2 Con JavaScript cambia el texto del título por el nombre de tu ficha.
let titulo  = document.getElementById("titulo");
console.log(titulo);
//paso 2  Con JavaScript cambia el texto del título por el nombre de tu ficha.
titulo.textContent = "ficha: 3233140";

//paso 3 Cambia el color del párrafo y su tamaño de fuente con style.

let mensaje = document.getElementById("mensaje");
mensaje.style.color = "green"
mensaje.style.fontSize =  "50px"
mensaje.style.fontFamily = "Times New Roman"

//Paso 4 Crea una clase .destacado en un archivo CSS y aplícala al título con classList.add.
titulo.classList.add("destacado");

// paso 5
let lista = document.getElementById("lista"); //capture al elememto padre

let nuevoElementoLi = document.createElement("li");//cree el elemento hijo
nuevoElementoLi.innerText = "Cultura Fisica";
lista.appendChild(nuevoElementoLi); 

let nuevoElementoLi2 = document.createElement("li");
nuevoElementoLi2.innerText = "etica";
lista.appendChild(nuevoElementoLi2); 

let nuevoElementoLi3 = document.createElement("li");
nuevoElementoLi3.innerText = "tecnica";
lista.appendChild(nuevoElementoLi3); 

let nuevoElementoLi4 = document.createElement("li");
nuevoElementoLi4.innerText = "ingles";
lista.appendChild(nuevoElementoLi4); 

let nuevoElementoLi5 = document.createElement("li");
nuevoElementoLi5.innerText = "SST";
lista.appendChild(nuevoElementoLi5); 

let tituloSENA = document.querySelector("#tituloSena");

// Cambiar el color de fondo de todos los <li> con querySelectorAll
let items = document.querySelectorAll("li");

for (const item of items) {
    item.style.backgroundColor = "lightblue";
}
