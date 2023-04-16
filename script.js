// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

//доповнення видаляємо елемент (5)
// Перший варіант 

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, arg = 5) {
  let indexDel = undefined; 
  array.forEach((element, index) => {
    if (element === arg) {
      indexDel = index;
    }
  });
  array.splice(indexDel, 1);
  return array;
}
console.log(removeElement(array));


// Другий варіант

// const array = [1, 2, 3, 4, 5, 6, 7];

// function removeElement(array, arg = 5) {
//   var evenArray = array.filter(function(element) {
//     return element !== arg;
//   });
//   return evenArray;
// }

// console.log(removeElement(array));
