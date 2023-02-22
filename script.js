const textArea = document.getElementById("textareaI");
const mensaje = document.getElementById("mensaje-out");
const tapa = document.querySelector(".tapa");
const bloqueSalida = document.querySelector(".mensajeSalida")

const btnE = document.getElementById("btnEncriptar");
const btnD = document.getElementById("btnDesencriptar");
const btnC = document.getElementById("btnCopiar");
const btnB = document.getElementById("btnBorrar");


/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`*/
function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value=textoEncriptado
    textArea.value = "";
    ocultarTapa();
    
}

function encriptar(stringEncriptada){
    let vocales = ["e","i","a","o","u"];
    let claves = ["enter","imes","ai","ober","ufat"];
    
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i<vocales.length; i++){
        if(stringEncriptada.includes(vocales[i])){
            stringEncriptada = stringEncriptada.replaceAll(vocales[i],claves[i]);
        }
    }
    return stringEncriptada

}


function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value=textoDesencriptado
    ocultarTapa();
    
}

function desencriptar(stringDesencriptada){
    let vocales = ["e","i","a","o","u"];
    let claves = ["enter","imes","ai","ober","ufat"];
    
    for(let i = 0; i<claves.length; i++){
        if(stringDesencriptada.includes(claves[i])){
            stringDesencriptada = stringDesencriptada.replaceAll(claves[i],vocales[i]);
        }
    }
    return stringDesencriptada

}


function borrarMensaje(){
    if (mensaje.value != 0) {
        mensaje.value ="";
    }
    mostrarTapa();
    
   
}


function copiar(){
    navigator.clipboard.writeText(mensaje.value);
}

function ocultarTapa(){
    tapa.style.visibility="hidden";
    bloqueSalida.style.visibility="visible";

}

function mostrarTapa(){
    tapa.style.visibility="visible";
    bloqueSalida.style.visibility="hidden";

}

btnE.addEventListener("click", botonEncriptar);
btnD.addEventListener("click", botonDesencriptar);
btnC.addEventListener("click", copiar);
btnB.addEventListener("click", borrarMensaje);
