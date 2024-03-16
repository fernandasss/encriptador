let texto = document.querySelector(".textoaEncriptar");
let texto_encriptado = document.querySelector(".textoEncriptado");

let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
function btnEncriptar (){
    let textoEncriptar = encriptar(texto.value);
    texto_encriptado.value = textoEncriptar;
}
function encriptar (fraseEncriptada){
    fraseEncriptada=fraseEncriptada.toLowerCase()
    for (let i=0; i < codigoMatriz.length; i++){
        if(fraseEncriptada.includes (codigoMatriz[i][0])){
            fraseEncriptada=fraseEncriptada.replaceAll(
                codigoMatriz [i][0],
                codigoMatriz [i][1])
        }
    }
    return fraseEncriptada
} 
function btnDesencriptar (){
    let textoEncriptar = desencriptar(texto.value);
    texto_encriptado.value = textoEncriptar;
}

function desencriptar (fraseDesencriptada){
    for (let i = codigoMatriz.length - 1; i >= 0; i--){
        if(fraseDesencriptada.includes (codigoMatriz[i][1])){
            fraseDesencriptada=fraseDesencriptada.replaceAll(
                codigoMatriz [i][1],
                codigoMatriz [i][0])
        }
    }
    return fraseDesencriptada
}
function copiar(){
    texto_encriptado.select();
    navigator.clipboard.writeText(texto_encriptado.value)
    texto_encriptado.value = "";
    alert("Texto copiado");
}