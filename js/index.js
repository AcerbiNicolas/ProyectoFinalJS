class Usuarios{
    constructor(nombre, contrasenia){
        this.nombre = nombre.toLowerCase();
        this.contrasenia = contrasenia.toLowerCase();
    }
};

const url = "https://pokeapi.co/api/v2/item/81/";

fetch(url)
.then(Response => Response.json())
.then(data => {
    let curso = document.getElementById("casas");
    curso.innerHTML =`<p>${data.name }</p>`
    
})
.catch(err=>console.log(err))


let enviaInfo = document.getElementById("enviarInfo");
enviaInfo ? enviaInfo.addEventListener("click",cargaDatos):{}

const usuario = [];
function cargaDatos(){
    let userNameV = document.getElementById("userName").value;
    let contraV = document.getElementById("contra").value;
    let validaContraV = document.getElementById("validaContra").value;
    let msjError = document.getElementById("errorValida");

    if (userNameV == "") {
        Swal.fire({
            title: 'Error',
            text: 'Ingrese usuario',
            icon: 'error',
            showConfirmButton: false,
            timer:2000
        })
    }else if (contraV == "") {
        Swal.fire({
            title: 'Error',
            text: 'Ingrese su contraseña',
            icon: 'error',
            showConfirmButton: false,
            timer:2000
        })
    }else if (validaContraV == "") {
        Swal.fire({
            title: 'Error',
            text: 'Ingrese la confirmacion de su contraseña',
            icon: 'error',
            showConfirmButton: false,
            timer:2000
        })
    }else if (contraV != validaContraV) {
        Swal.fire({
            title: 'Error',
            text: 'Las contraseñas no coinciden',
            icon: 'error',
            showConfirmButton: false,
            timer:2000
        })
    }else{
        Swal.fire({
            title: 'Registrado correctamente',
            text: 'Listo para el logueo',
            icon: 'success',
            showConfirmButton: false,
            timer:2000
        })
        usuario.push(new Usuarios(userNameV,contraV));
        localStorage.setItem(userNameV,contraV)
    }
}
let botonLogueo = document.getElementById("btnlogueo");
botonLogueo ? botonLogueo.addEventListener("click", revisaDB):{};

function revisaDB() {
    let userLogueo = document.getElementById("usuarioLogueo").value;
    let contraLogueo = document.getElementById("contraLogueo").value;
    let msj = document.getElementById("userLogueoDiv");

    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i)
        let valor = localStorage.getItem(clave);

        if (userLogueo == "") {
            Swal.fire({
                title: 'Usuario Incompleto',
                text: 'Ingrese su usuario',
                icon: 'question',
                showConfirmButton: false,
                timer:1500
            })
        }else if (userLogueo != clave) {
            Swal.fire({
                title: 'Usuario Incorrecto',
                text: 'Ingrese su usuario',
                icon: 'question',
                showConfirmButton: false,
                timer:1500
            })
        }else if (contraLogueo == "") {
            Swal.fire({
                title: 'Error',
                text: 'Ingrese la contraseña',
                icon: 'question',
                showConfirmButton: false,
                timer:1500
            })
        }else if(contraLogueo != valor){
            Swal.fire({
                title: 'Error',
                text: 'Ingrese bien su contraseña',
                icon: 'error',
                showConfirmButton: false,
                timer:1500
            })
        }else{
            Swal.fire({
                title: 'Bienvenido',
                text: '',
                icon: 'success',
                showConfirmButton: false,
                timer:2100
            })
            ingresaAPlataforma();
            break;
        }
    } 
}
function ingresaAPlataforma() {
    //Esta funcion logra correr con el live server
    timer=3000
    timer
    document.location.href = '/pages/plataforma.html';
}
//eliminaLocalStore(true)
function eliminaLocalStore(espacio) {
    espacio? localStorage.clear() : sessionStorage.clear();
}