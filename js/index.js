class Usuarios{
    constructor(nombre, contrasenia){
        this.nombre = nombre.toLowerCase();
        this.contrasenia = contrasenia.toLowerCase();
    }
};

let enviaInfo = document.getElementById("enviarInfo");

if (enviaInfo) {
    enviaInfo.addEventListener("click", cargaDatos);
}
const usuario = [];
function cargaDatos() {
    let userNameV = document.getElementById("userName").value;
    let contraV = document.getElementById("contra").value;
    let validaContraV = document.getElementById("validaContra").value;

        if (userNameV == "") {
            document.getElementById("errorLogueoReg").innerHTML = "Ingrese usuario";
        }else if (contraV == "") {
            document.getElementById("errorContraReg").innerHTML = "Ingrese su contraseña";
        }else if (validaContraV == "") {
            document.getElementById("errorValida").innerHTML = "Ingrese la confirmacion de su contraseña";
            console.log("Ingrese la validacion de su contraseña")
        }else if (contraV != validaContraV) {
            document.getElementById("validaMal").innerHTML = "Las contraseñas no coinciden";
        }else{
            document.getElementById("registracionExitosa").innerHTML = "Registrado correctamente";
            localStorage.setItem(userNameV,contraV)
        }
}
//eliminaLocalStore(true)
function eliminaLocalStore(espacio) {
    if (espacio) {
        localStorage.clear();
    }else{
        sessionStorage.clear();
    }
}
let botonLogueo = document.getElementById("btnlogueo");
if (botonLogueo) {
    botonLogueo.addEventListener("click", revisaDB);
}
function revisaDB() {
    let userLogueo = document.getElementById("usuarioLogueo").value;
    let contraLogueo = document.getElementById("contraLogueo").value;

    
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i)
        let valor = localStorage.getItem(clave);
    
        if (userLogueo != clave) {
            console.log("no es el mismo usuario")
        }else if(contraLogueo != valor){
            document.getElementById("userLogueoDiv").innerHTML = "Error en el ingreso";
            console.log("Error de contraseña");
        }else{
            console.log("Ingresaste");
            ingresaAPlataforma();
            break;
        }
    }
}
function ingresaAPlataforma() {
    location.href = "http://127.0.0.1:5500/ProyectoFinal/pages/plataforma.html";
}
