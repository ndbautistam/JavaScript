//Arreglos en JS
let programa1 = "ADSO";
let programa2 = "SST";
let programa3 = "Topografia";
let programa4 = "mineria";

let programas = new Array ("ADSO", "SST","Topografia ","mineria");
console.log(typeof programas);

//Declarar Arrays nuevo 
let programasSENA= ["ADSO", 22811, true];
console.log(programasSENA);
console.log(typeof programasSENA);

//ARREGLO DE LENGUAJES DE PROGRAMACION 
let lenguajes = ["HTML", "CSS", "JavaScript", "Python"];

//Imprimir elementos de un arreglo
console.log(lenguajes[2]);
console.log(lenguajes[0]);
console.log(lenguajes[5]);
//Agregar elementos a un arreglo
lenguajes.push("java");
console.log(lenguajes);
//modificar elementos de un arreglo 
lenguajes[2] ="JS";
console.log(lenguajes);
// Eliminar un elemento de un arreglo
lenguajes.pop();
console.log(lenguajes);
//
lenguajes.reverse();
console.log(lenguajes);
//
console.log(lenguajes.length);

console.log(lenguajes.includes("Python"));
console.log(lenguajes.includes("PHP"));
//Recorrer un arreglo con un ciclo FOR 

for (let i=0 ; i < lenguajes.length; i++ ){
    console.log(lenguajes[i])
}

//recorrer un arreglo con un for..of
for(let lenguaje of lenguajes){
    console.log(lenguaje);
}
//recorrer un arreglo con for-each
lenguajes.forEach(function(lenguaje){
console.log(lenguajes);
})

//concatenar 2 arrays 
let lenguajesFronted =["HTML", "CSS", "JavaScript",];
let lenguajesBackend =["Python", "PHP", "Java", "C#"];

let lenguajesProgramacion = lenguajesFronted.concat(lenguajesBackend);
console.log(lenguajesProgramacion);
