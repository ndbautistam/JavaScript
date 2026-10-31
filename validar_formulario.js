function validarContrasena(){
    let contra1 =document.getElementById("contra1")
    let contra2= document.getElementById("contra2")

    if(contra1.value != "" && contra2.value != ""){
        if(contra1.value == contra2.value){
    alert("Registro exitoso !")
    return true;
    }else{
            alert("Las contraseñas no Coiciden")
    } 
     }else{
        alert("Los campos de las contraseñas estan vacias");
        return false;

     }
}