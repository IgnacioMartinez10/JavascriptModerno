const producto = {
    nombre: 'Remera Simpsons',
    precio: 300,
    disponible: true,
};

console.log( Object.keys(producto)); // retorna las llaves del object (nombre, precio, etc)

console.log(Object.values(producto)); //retorna los valores de las keys(Remera de los simpsons, 300 etc.)

console.log(Object.entries(producto)); //Retorna todo. (Keys, values etc.)

