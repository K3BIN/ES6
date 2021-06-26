let items = new Set([1,"1",1,1,1,1,2,5,345,45,6,57,65,8,345,3,41,23]);

console.log(items.size);
console.log(items);

console.log(items.has("1"));


items.delete(345);
console.log(items.size);
console.log(items);


items.clear();
console.log(items.size);
console.log(items);

let numeros = [1,34,6,74,13,4,1];
let setNumeros = new Set(numeros);

console.log(setNumeros);
let arrayNumeros = [...setNumeros];

console.log(arrayNumeros);

/**
 * 
 * let numeros = [1,34,6,74,13,4,1];
 * let arrayNumeros = eliminaDuplicados(numeros);
 * console.log(arrayNumeros);
 * 
 * 
 * function eliminaDuplicados(items){
 * return [... new Set(items)];
 * }
 * 












































































































































