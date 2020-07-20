/* 
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. 
Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
*/
'use strict';
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const AllPropValues = [];
  for (const product of arr) {
    const productKeys = Object.keys(product);
    const productValues = Object.values(product);
    for (let i = 0; i < productKeys.length; i += 1) {
      if (productKeys[i] === prop) {
        AllPropValues.push(productValues[i]);
      }
    }
  }
  return AllPropValues;
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []