class Usuarios{
    constructor(nombre, contrasenia, categoria){
        this.nombre = nombre.toLowerCase();
        this.contrasenia = contrasenia.toLowerCase();
        this.categoria = parseInt(categoria);
    }
    getPermisos() {
        if(this.categoria == 0){
            return "ageno a la plataforma, compre un curso y sea parte de esta familia";
        }else if(this.categoria == 1){
            return "alumno";
        }else if(this.categoria == 2){
            return "tutor";
        }else if(this.categoria == 3){
            return "profesor/a";
        }
    }
};

const usuarios = [];
usuarios.push(new Usuarios("jorge", "coderhouse12",2));
usuarios.push(new Usuarios("nicolas", "coderhouse10",1));
usuarios.push(new Usuarios("silma", "housecoder",3));
usuarios.push(new Usuarios("ricardo", "coder",0));

let flag = true;
while (flag) {
    let nombreIngresado = prompt("Ingrese usuario");
    if(nombreIngresado != null){
        //valida que exista el usuario para poder buscar la contrasenia
        let existe = existeUsuario(nombreIngresado, usuarios);
        if(existe){
            ingresaContrasenia(usuarios, nombreIngresado);
            flag = false;
        }else if (existe == false) {
            console.log("no existe el usuario " + nombreIngresado);
        }
    }
}

//Funcion que entra en bucle si la contraseña no es correcta
function ingresaContrasenia(listaUsuarios, nombre) {
    for (let i = 0; i < listaUsuarios.length; i++) {
        const element = listaUsuarios[i].nombre;
        if (element == nombre) {
            let bucle = true;
            while (bucle) {
                let contrasenia = prompt("Ingresa contraseña");
                bucle = comparaContrasenia(listaUsuarios[i], contrasenia);
                if(bucle == false){
                    alert("Bienvenido " + listaUsuarios[i].nombre + " usted es " + listaUsuarios[i].getPermisos());
                }
            }
        }
    }
}
//Compara contraseña con el nombre de usuario ya ingresado para ver si es correcta
function comparaContrasenia(usuario, contrasenia){
    if(usuario.contrasenia == contrasenia){
        return false;
    }else{
        return true;
    }
}
//Valida la existenca del usuario
function existeUsuario(nombre, listaUsuarios){
    let salida = false;
    for (let i = 0; i < listaUsuarios.length; i++) {
        const element = listaUsuarios[i].nombre;
        if (element == nombre) {
            salida = true;
            break;
        }
    }
    return salida;
}
//Muestra lista de usuarios registrados. ------------
muestraLista(usuarios);
function muestraLista(listaUsuarios){
    console.log("----------------------------");
    for (let i=0; i<listaUsuarios.length; i++){
        console.log("Usuario " + listaUsuarios[i].nombre + " es " + listaUsuarios[i].getPermisos());
    }
};