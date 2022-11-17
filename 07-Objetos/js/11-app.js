const producto = {
    nombre: 'Remera Simpsons',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    
    }
};

const producto2 = {
    nombre: 'Remera Rolling Stone',
    precio: 400,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
};

producto.mostrarInfo();
producto2.mostrarInfo();

//La palabra this lo que hace es buscar los valores que existen en el mismo objeto, en lugar de irlos a buscar afuera.
// Busca la propiedad dentro del objecto.
