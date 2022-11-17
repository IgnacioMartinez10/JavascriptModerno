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

//Destructuring de objetos anidados.

const { nombre,informacion, informacion:{ fabricacion, fabricacion: { pais}} } = producto;

console.log(nombre);

console.log(informacion);
console.log(fabricacion);
console.log(pais);