'use strict'
// Використання строгого режиму для покращення якості коду і запобігання потенційним помилкам

function createNewUser() {
  // Оголошення функції для створення нового користувача

  let firstName = prompt('Введіть ім`я');
  // Запитуємо ім'я користувача через діалогове вікно prompt і зберігаємо його в змінну firstName

  let lastName = prompt('Введіть фамілію');
  // Запитуємо прізвище користувача через діалогове вікно prompt і зберігаємо його в змінну lastName

  const newUser = {
    // Створюємо об'єкт newUser з полями firstName і lastName
    firstName,
    lastName,
    getLogin() {
      // Додаємо метод getLogin до об'єкта newUser
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
      // Метод повертає логін користувача, який складається з першої літери імені та повного прізвища, переведених у нижній регістр
    }
  };

  return newUser;
  // Повертаємо об'єкт newUser
}

const user = createNewUser();
// Викликаємо функцію createNewUser і зберігаємо результат у змінну user

console.log(user.getLogin());
// Виводимо логін користувача у консоль, викликаючи метод getLogin на об'єкті user