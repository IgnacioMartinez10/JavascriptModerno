
//Object Literal
const producto = {
    nombre: 'Remera Simpsons',
    precio: 300,
    disponible: true,
};

//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto1 = new Producto('Remera de los stone', 300);
const producto2 = new Producto('Remera de rincon', 200);

console.log(producto1);
console.log(producto2);

//Constructor es mas dinamico, aunque se usa mas el literal.

