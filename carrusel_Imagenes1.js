let imagenes = ["img/img1.jpg","img/img2.jpg","img/img3.jpg"];
// Indices array         0      ,       1      ,      2

let btnAnterior = document.getElementById("btnAnterior");//Para Buscar el boton anterior
let btnSiguiente = document.getElementById("btnSiguiente");//Para Buscar el boton siguiente
let posicion = 0;//primera posicion del index del array
//Para darle click al boton "siguiente"
btnSiguiente.addEventListener("click", function(){
    let slider = document.getElementById("slider"); //Busco la img 
    posicion++;//paso la siguiente img
    //la condicion si llego al final
    if(posicion >= imagenes.length){
        posicion=0;//se devuelve a la primera img
    }
    slider.src = imagenes[posicion];//muestra la siguiente img
});
//Para darle click al boton "Anterior"
btnAnterior.addEventListener("click", function(){
    let slider = document.getElementById("slider");//Para buscar la img
   posicion--;//paso la img anterior
   // condicion si me paso a la primera img 
   if (posicion < 0){
    posicion = imagenes.length-1;//voy a la ultima img 
   }
   slider.src = imagenes[posicion];//Para mostrar la img anterior
});

