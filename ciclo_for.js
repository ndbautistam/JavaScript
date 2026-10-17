// CICLOS O BUCLES - LOOPS

//FOR - INCREMENTO

for (let i=1; i <= 10; i++){
    console.log(i)
}

//FOR - DECREMENTO

for(let j=5; j>=1; j--){
    console.log(j)
}
console.log("Feliz Año!!!")

//TABLA DE MULIPLICAR DEL 7

for (let m=1; m<=10; m++){
    console.log(`multiplicacion de 7 * ${m} es igual a ${7*m}`)
}

//FOR ...OF - PARA RECORRER ARREGLOS

let nombres = ["Felipe", "Miguel", "Adriana", "Alejandra", "jOHN"];

//for (let i=0; i < nombres.length; i++){
//    console.log(nombres)
//}

for (let nombre of nombres){
    console.log(nombre)
}
let frutas = ["Manzana", "Banana", "uva"];

for (let fruta of frutas){
    console.log(fruta)
}
