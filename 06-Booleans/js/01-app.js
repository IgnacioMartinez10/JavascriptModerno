const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

// console.log(boolean1);
// console.log(boolean2);

console.log(boolean1 == boolean2);
console.log(boolean1 == boolean3); // Da falso porque el boolean3 es typeof String.


const boolean4 = new Boolean(true);
console.log(typeof boolean4)
