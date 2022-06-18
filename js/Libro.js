class Libro{
    constructor(nombre, categoria, precio){
        this.nombre = nombre.toLowerCase();
        this.categoria = categoria.toLowerCase();
        this.precio = parseFloat(precio);
    }
    getTotalImpuesto() {
        let resultado = this.precio * 2.5;
        return this.resultado;
    };
};