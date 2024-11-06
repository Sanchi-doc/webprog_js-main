'use strict'

function filterBy(array, typeOfData) {
  // Оголошення функції filterBy, яка приймає масив та тип даних для фільтрації

  const filtered = [];
  // Створення порожнього масиву, куди будемо зберігати відфільтровані елементи

  for (let i = 0; i < array.length; i++) {
    // Проходимося по кожному елементу масиву

    if (typeof array[i] !== typeOfData) {
      // Якщо тип елемента не відповідає вказаному типу даних
      filtered.push(array[i]);
      // Додаємо елемент до масиву filtered
    }
  }

  return filtered;
  // Повертаємо відфільтрований масив
}

const example = ['hello', 'world', 67, '67', null];
// Створюємо приклад масиву для фільтрації

console.log(filterBy(example, 'boolean'));
// Викликаємо функцію filterBy з масивом example та типом 'boolean', і виводимо результат у консоль