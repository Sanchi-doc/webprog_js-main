'use strict'


document.addEventListener('DOMContentLoaded', () => {
  // Додає обробник події, який запускається, коли DOM повністю завантажено

  function getValidNumber(promptMessage, defaultValue) {
    // Функція для отримання дійсного числа від користувача з відповідним повідомленням та значенням за замовчуванням
    while (true) {
      let input = prompt(promptMessage, defaultValue);
      // Запитуємо число у користувача через діалогове вікно prompt
      input = +input;
      // Перетворюємо введене значення у число

      if (!isNaN(input)) {
        // Якщо введене значення є дійсним числом
        return input;
        // Повертаємо це значення
      }

      alert('Ви ввели не число');
      // Якщо введене значення не є дійсним числом, показуємо попередження і повторюємо запит
    }
  }

  function getValidOperation(promptMessage, defaultValue) {
    // Функція для отримання дійсної математичної операції від користувача з відповідним повідомленням та значенням за замовчуванням
    const operations = ['+', '-', '*', '/'];
    // Масив дійсних операцій
    while (true) {
      let operation = prompt(promptMessage, defaultValue);
      // Запитуємо операцію у користувача через діалогове вікно prompt

      if (operations.includes(operation)) {
        // Якщо введена операція є однією з дійсних операцій
        return operation;
        // Повертаємо цю операцію
      }

      alert('Невідома дія, повторіть спробу');
      // Якщо введена операція не є дійсною, показуємо попередження і повторюємо запит
    }
  }

  const number1 = getValidNumber('Введіть перше число:', '');
  // Отримуємо перше число від користувача
  const number2 = getValidNumber('Введіть друге число:', '');
  // Отримуємо друге число від користувача
  const oper = getValidOperation('Введіть дію(+, -, *, /):', '');
  // Отримуємо математичну операцію від користувача

  function calculate(num1, num2, op) {
    // Функція для виконання обчислень на основі двох чисел і операції
    switch(op) {
      case '+':
        return num1 + num2;
        // Додавання
      case '-':
        return num1 - num2;
        // Віднімання
      case '*':
        return num1 * num2;
        // Множення
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
          // Ділення, якщо друге число не дорівнює нулю
        } else {
          return 'Помилка: на нуль ділити не можна';
          // Повідомлення про помилку при діленні на нуль
        }
      default:
        return 'Невідома операція';
        // Повідомлення про невідому операцію
    }
  }
  
  const result = calculate(number1, number2, oper);
  // Виконуємо обчислення і зберігаємо результат
  console.log(`Результат: ${number1} ${oper} ${number2} = ${result}`);
  // Виводимо результат у консоль
});
