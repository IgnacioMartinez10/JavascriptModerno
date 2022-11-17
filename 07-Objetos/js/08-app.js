"use strict";

const producto = {
    nombre: 'Remera Simpsons',
    precio: 300,
    disponible: true,
};

Object.freeze( producto ); //freeza el objeto para que posteriormente no  se pueda modificar.

console.log(Object.isFrozen(producto)); //Para saber si el objeto esta freezado o no (devuelve true o false)

