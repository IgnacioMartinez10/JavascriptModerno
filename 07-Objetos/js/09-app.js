"use strict";

const producto = {
    nombre: 'Remera Simpsons',
    precio: 300,
    disponible: true,
};

Object.seal(producto); // Sella el objeto. No se puede agregar o eliminar propiedades//   Pero si se pueden modificar las propiedades que existen.
                    

producto.disponible = false;

console.log(producto);


console.log(Object.isSealed(producto));