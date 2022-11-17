const producto = 'Monitor 20 pulgadas';

 //replace sirve para reemplazar
 console.log(producto);
 console.log(producto.replace('pulgadas', '"'));


 //slice sirve para cortar un string
 console.log(producto.slice(0, 10));
 console.log(producto.slice(3, 1)); // NO DA RESULTADO



 //Alternativa para slice
console.log(producto.substring(0, 10));
console.log(producto.substring(4, 1)); //TOMA EL ORDEN MAS GRANDE Y LO IMPRIME

const usuario = "Ignacio"
console.log(usuario.substring(0, 1)); //ME IMPRIME LA PRIMER LETRA YA QUE SE LE DECLARO EN ESE ORDEN
console.log(usuario.charAt(0)); //Me imprime la letra que se le ordenó por posicion 