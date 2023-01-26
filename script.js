var texto_secreto = document.querySelector(".texto_secreto");
var mensaje_encriptado = document.querySelector(".mensaje_encriptado");

function encriptar(){
    ver_modulos();
    /*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    */
    var codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
            for (var j = 0; j < codigo.length; j++){
                    if(texto_secreto.value.includes(codigo[j][0])){
                        texto_secreto.value = texto_secreto.value.replaceAll(codigo[j][0],codigo[j][1]);
                    }
            }
    mensaje_encriptado.value = texto_secreto.value;
    limpiar_area()
}

function desencriptar(){
    ver_modulos();
    var codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
            for (var j = 0; j < codigo.length; j++){
                    if(texto_secreto.value.includes(codigo[j][1])){
                        texto_secreto.value = texto_secreto.value.replaceAll(codigo[j][1],codigo[j][0]);
                    }
            }
    mensaje_encriptado.value = texto_secreto.value;
    limpiar_area()
}

function ver_modulos(){
    
    /*oculto los elementos del cuadro_mensaje*/
    /*document.getElementById("texto_secreto").style.visibility = "hidden";*/
    mensaje_encriptado.style.backgroundImage = "none";
}

function limpiar_area(){
    texto_secreto.value = ""
}