const producto = {
    nombre: 'Remera Simpsons',
    precio: 300,
    disponible: true,
    informacion:{
        medidas:{
            peso: '1kg',
            altura: '1m'
        },
        fabricacion:{
            pais: 'Argentina'
        }
    }
};

// console.log(producto);

console.log(producto.informacion.medidas.altura)