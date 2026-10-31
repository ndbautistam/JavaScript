//EVENTOS DEL MOUSE -------------------------

function saludar(){
    alert("Holi");
}

boton3.onclick = function (){
    alert("Hello !!")
}

boton3.onclick = function(event){
    console.log(event);
    console.log(event.currentTarget); //HTML
    console.log(event.clientX); //Coordenadas Eje X
    console.log(event.clientY); //Coordenadas Eje Y
    console.log(event.type); //Tipo: Click
}

//Seleccionar el Elemento Boton del HTML 
let boton4 = document.getElementById("boton4");

//Usar el EventHandler: addEventListener

boton4.addEventListener("dblclick", function(){
    alert("ADSO");
});

boton4.addEventListener("click", function(){
    alert("SENA");
});

//Fecha Actual --------------

let botonFecha = document.getElementById("botonFecha");
let fecha = document.getElementById("fecha");

botonFecha.addEventListener("click", function(){
    fecha.innerText = Date();
});

//MouseOver y MouseOut
let box = document.getElementById("box");

box.addEventListener("mouseover", function(){
    box.innerText = "Mouse encima";
    box.style.background = "red";
});

box.addEventListener("mouseout",function(){
    box.innerText = "Mouse afuera";
    box.style.background = "blue";
});


//Mousemove

let cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(event){
    cursor.innerText = "Coordenada X: " + event.clientX + " Coordenada Y :" + event.clientY; 
})


//EVENTOS DEL TECLADO -----------------------------

let tecla = document.getElementById("tecla");
let mostrarTecla = document.getElementById("mostrarTecla");

tecla.addEventListener("keydown", function(event){
    mostrarTecla.innerText = "Tu presionaste la Tecla: " + event.key;
});

//EVENTOS DE CARGA -----------------------
function cargarPagina(){
    alert("Se ha cargado la pagina completa !!")
};
//Programacion de eventos 
let miDiv = document.getElementById("miDiv");
let miP = document.getElementById("miP");
//listenner para el p contenedor 
miP.addEventListener("Click", function(){
alert("Hiciste click en el parrafo <p>");
}, true);

//listenner para el div contenedor 
miDiv.addEventListener("click", function(){
    alert("Hiciste click en el contenedor <div>")
}, true);