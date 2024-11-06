
'use strict'
// Використання строгого режиму для покращення якості коду і запобігання потенційним помилкам

document.addEventListener("DOMContentLoaded", () => {
  // Додає обробник події, який запускається, коли DOM повністю завантажено

  let name, age;
  // Оголошення змінних для збереження імені та віку користувача

  const getNameAndAge = () => {
    // Функція для отримання імені та віку користувача через діалогові вікна

    name = prompt("Please enter your name:", name || '');
    // Запитуємо ім'я користувача через діалогове вікно prompt, використовуємо попереднє значення, якщо воно є

    age = prompt("Please enter your age:", age || '');
    // Запитуємо вік користувача через діалогове вікно prompt, використовуємо попереднє значення, якщо воно є

    if (!name) {
      alert("Name cannot be empty. Please enter your name.");
      // Якщо ім'я пусте, показуємо попередження і знову викликаємо getNameAndAge
      return getNameAndAge();
    }

    age = Number(age);
    // Перетворюємо введений вік у числовий формат
    if (isNaN(age)) {
      alert("Age must be a number. Please enter your age.");
      // Якщо введене значення не є числом, показуємо попередження і знову викликаємо getNameAndAge
      return getNameAndAge();
    }

    return { name, age };
    // Повертаємо об'єкт з ім'ям і віком
  };

  const { name: userName, age: userAge } = getNameAndAge();
  // Викликаємо getNameAndAge і деструктуруємо результат у змінні userName і userAge

  if (userAge < 18) {
    alert("You are not allowed to visit this website.");
    // Якщо користувачу менше 18 років, показуємо повідомлення про заборону доступу
  } else if (userAge >= 18 && userAge <= 22) {
    const confirmResult = confirm("Are you sure you want to continue?");
    // Якщо користувачу від 18 до 22 років включно, запитуємо підтвердження на продовження
    if (confirmResult) {
      alert(`Welcome, ${userName}`);
      // Якщо користувач підтвердив, показуємо привітання
    } else {
      alert("You are not allowed to visit this website.");
      // Якщо користувач не підтвердив, показуємо повідомлення про заборону доступу
    }
  } else {
    alert(`Welcome, ${userName}`);
    // Якщо користувачу більше 22 років, показуємо привітання
  }
});
