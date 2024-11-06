'use strict'

document.addEventListener('DOMContentLoaded', () => {
  // Додає обробник події, який запускається, коли DOM повністю завантажено

  function getValidNumber() {
    // Функція для отримання дійсного цілого числа від користувача
    while (true) {
      let input = prompt('Please enter a number:', '');
      // Запитуємо число у користувача через діалогове вікно prompt
      input = +input;
      // Перетворюємо введене значення у число

      if (!isNaN(input) && Number.isInteger(input)) {
        // Якщо введене значення є дійсним цілим числом
        return input;
        // Повертаємо це значення
      }

      alert('Please enter a valid integer');
      // Якщо введене значення не є дійсним цілим числом, показуємо попередження і повторюємо запит
    }
  }

  const number = getValidNumber();
  // Викликаємо getValidNumber і зберігаємо результат у змінній number
  const result = [];
  // Оголошуємо порожній масив для зберігання чисел, що діляться на 5

  for (let i = 0; i <= number; i++) {
    // Цикл від 0 до введеного користувачем числа включно
    if (i % 5 === 0 && i !== 0) {
      // Якщо число ділиться на 5 без залишку і не дорівнює 0
      result.push(i);
      // Додаємо це число у масив result
    }
  }

  if (result.length > 0) {
    // Якщо масив result містить хоча б одне число
    console.log(`Numbers divisible by 5 from 0 to ${number}`, result);
    // Виводимо повідомлення з числами, що діляться на 5
  } else {
    console.log('Sorry, no numbers');
    // Якщо масив result порожній, виводимо повідомлення про відсутність чисел
  }
});
