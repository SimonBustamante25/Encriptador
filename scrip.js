const encriptador = document.querySelector(".encriptador");
const textorespuesta = document.querySelector(".texto-respuesta");
let numeroMaximo = 300;

//    La letra "e" es convertida para "enter"
//    La letra "i" es convertida para "imes"
//    La letra "a" es convertida para "ai"
//    La letra "o" es convertida para "ober"
//    La letra "u" es convertida para "ufat"



function btnencriptar(){
    const textoencriptado = encriptar(encriptador.value)
    textorespuesta.value = textoencriptado
    encriptador.value = "";
    textorespuesta.style.backgroundImage = "none"
}


function encriptar(stringencriptar){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    console.table(matrizcodigo)
    stringencriptar = stringencriptar.toLowerCase()

    for(let i = 0; i<matrizcodigo.length; i++){
        if(stringencriptar.includes(matrizcodigo[i][0])){
            stringencriptar = stringencriptar.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return stringencriptar
}







function btndesencriptar(){
    const textoencriptado = desencriptar(encriptador.value)
    textorespuesta.value = textoencriptado
    encriptador.value = "";

}


function desencriptar(stringdesencriptar){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    console.table(matrizcodigo)
    stringdesencriptar = stringdesencriptar.toLowerCase()

    for(let i = 0; i<matrizcodigo.length; i++){
        if(stringdesencriptar.includes(matrizcodigo[i][1])){
            stringdesencriptar = stringdesencriptar.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }
    return stringdesencriptar
}






function copiarTexto() {
    const texto = textorespuesta.value;
  
    if (texto.length === 0) {
      alert('Encripte o Desencripte primero un texto.');
    } else {
      // Verifica los permisos del clipboard
      navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          navigator.clipboard.writeText(texto).then(
            () => {
              alert('Seha copiado el texto al clickboard: ' + texto);
            },
            () => {
              // Manejar error al copiar
            }
          );
        } else {
          // Manejar el caso en que el usuario no otorgue permisos
          alert("No tienes permisos para copiar al portapapeles.");
        }
      });
    }
  }


  document.addEventListener('DOMContentLoaded', () => {
    const messageTextarea = document.getElementById('inputText');
    // Establece el número máximo de caracteres permitido
    messageTextarea.setAttribute('maxlength', numeroMaximo);
    return;
});