const producto = {
    nombre: 'Remera Simpsons',
    precio: 300,
    disponible: true,
};

const medidas = {
    medida: '1m',
    peso: '1kg'

};

const resultado = { ...producto, ...medidas}; // Spread operator o Rest operator. Es la mas utilizada.


const resultado2 = Object.assign(producto, medidas);
console.log(resultado);
console.log(resultado2);