//Objetos en Js-JSON

//Declarar un objeto 

let aprendiz = {
    nombre:"Dayana",
    apellido:"Bautista",
    correo:"ndbautistam@gmail.com",
    programa:{
        nombrePrograma: "ADSO",
        duracionPrograma:21,
        codigoPrograma: 32331,
        ficha: 3233140,
    },
    saludar: function(saludo){
        console.log("Hola Mundo!!");
    }
}
console.log(aprendiz);
console.log(aprendiz.programa);
console.log(aprendiz.programa.ficha);
console.log(aprendiz.saludar());

//constructores de funciones de objetos 
function aprendizSENA(nombre, apellido, correo, programa){
this.nombre= nombre;
this.apellido= apellido;
this.correo= correo;
this.programa= programa;
this.saludar= function(){
    console.log("Hola mundo!!")
    }
}
//crear una copia(instanciar el modelo)
let aprendiz1= new aprendizSENA("nelsi", "Bautista", "yayisndem15@gmail.com", "ADSO");
console.log(aprendiz1);
console.log(typeof aprendiz1);

let aprendiz2= new aprendizSENA("John ", "Montañez", "jjmd@gmail.com", "SST")
console.log(aprendiz2);
console.log(typeof aprendiz2);

console.log(aprendiz2.nombre);