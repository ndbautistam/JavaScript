//DOCUMENT OBJECT MODEL (DOM)

//Seleccionar un elemento por si ID

let titleHeader = document.getElementById("titleHeader");
console.log(titleHeader);
console.log(typeof titleHeader);

//Seleccionar un elemento por su etiqueta (getElementByTagName)
let parrafos = document.getElementsByTagName("p");
console.log(parrafos);
console.log(typeof parrafos);

//Seleccionar un elemento por su clase 
let descriptionParrafo =document.getElementsByClassName("description");
console.log(descriptionParrafo);
console.log(typeof descriptionParrafo);

//seleccionar u elemento por su selector CSS
let parrafoselector = document.querySelector(".description")
let tituloSENA = document.querySelector("#tituloSena");

console.log(parrafoselector);
console.log(tituloSENA);
console.log(typeof parrafoselector);

//seleccionar un elemento con el query selector

let allParrafos = document.querySelectorAll(".description");
console.log(allParrafos);

//---------Modificar los atributos de los elementos de DOM--------------
//Cambiar el texto de un elemento
let subtituloSENA = document.getElementById("subtituloSENA");
subtituloSENA.textContent = "ADSO";

//
titleHeader.style.color = "pink"
titleHeader.style.fontSize =  "100px"
titleHeader.style.fontFamily = "Times New Roman"

parrafos[2].style.color = "purple"

//Agregar una clase de CSS a un HTML mediante JavaScript
let contactanos = document.getElementById("contactanos");
contactanos.classList.add("destacado");

let myimg = document.getElementById("myimg");
myimg.src ="imagen index .jpg"

//Cambiar la propiedad href de un enlace 
let mylink = document.getElementById("mylink");
mylink.href = "https://betowa.sena.edu.co/";

//Crear un Elemento de lista y agregarlo al DOM
let lista = document.getElementById("lista"); //capture al elememto padre

let nuevoElementoLi = document.createElement("li");//cree el elemento hijo
nuevoElementoLi.innerText = "Pepito";
console.log(nuevoElementoLi);

lista.appendChild(nuevoElementoLi); 
//agregue  el elemento hijo al padre

//Insetar nuevas etiquetas html con JS
 let nuevoDiv = document.createElement("div");
 nuevoDiv.innerHTML =
 ` 
 <h1> Mas codigo HTML </1>
<p> Nuevo parrafo con JavaScript</p>
<img src="assets/images login.jpg" width="200px">
 `
 document.body.appendChild(nuevoDiv);
 console.log(nuevoDiv)



 let divPadre = document.getElementById("divPadre");
 let divHijo = document.getElementById("tituloHijo");

 divHijo.removeChild(tituloHijo);

 //Reemplazar un elemento HTML

 let nuevoTitulo = document.createElement("h1")
 nuevoTitulo.innerText = "este es un titulo nuevo que reemplaza el viejo";

 let tituloHijo2 = document.getElementById("tituloHijo2");

 divPadre.replaceChild(nuevoTitulo, tituloHijo2);

