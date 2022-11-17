const producto = {
    nombre: 'Remera Simpsons',
    precio: 300,
    disponible: true,
}

//Agregar nuevas propiedades al objeto;
producto.imagen = "imagen de homero";


//Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);

