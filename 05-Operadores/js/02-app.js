const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si los 2 numeros son iguales

console.log(numero1 == numero2);

//Comparador estricto 

console.log(numero1 === numero2);

console.log(numero1 === parseInt (numero2)); // cambiamos el numero2 a numero entero con el parseint
console.log(typeof numero1);
console.log(typeof numero2);


// Diferente

const password1 = "Admin";
const password2 = "admin";

console.log(password1 != password2);
console.log(numero1 !== numero2); // Son diferentes porque el !== es estricto, reconoce que uno es string y el otro number
 console.log(numero1 !== parseInt(numero2));// Declara que NO son diferentes. Osea, son iguales porque el parseint lo transforma como numero.
 


