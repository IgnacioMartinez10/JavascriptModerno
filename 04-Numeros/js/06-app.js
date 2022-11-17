const numero1 = "20";
const numero2= "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log(Number.parseInt (numero1)); //convierte este string a numero entero
console.log(Number.parseFloat(numero2)); // convierte este string a numero PERO con el decimal que tiene
console.log(Number.parseInt(numero3)); // da como resultado NaN, YA QUE NO ES UN NUMERO.

// Revisar si un numero es entero o no (devuelve true o false)
console.log(Number.isInteger (numero4));