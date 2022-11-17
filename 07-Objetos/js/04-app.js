const producto = {
    nombre: 'Remera Simpsons',
    precio: 300,
    disponible: true,
};

// const nombre = producto.nombre;
// console.log(nombre);


// Destructuring  (Ademas de extraer el valor, crea la variable.)

const { nombre, precio} = producto;
console.log(nombre);
console.log(precio);