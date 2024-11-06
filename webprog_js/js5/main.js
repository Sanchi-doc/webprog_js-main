'use strict'

function createNewUser() {
  // Оголошення функції для створення нового користувача

  let firstName = prompt('Введіть ім`я');
  // Запитуємо ім'я користувача через діалогове вікно prompt і зберігаємо його в змінну firstName

  let lastName = prompt('Введіть фамілію');
  // Запитуємо прізвище користувача через діалогове вікно prompt і зберігаємо його в змінну lastName

  let dateOfBirth = prompt('Введіть дату народження (дд.мм.рррр)');
  // Запитуємо дату народження користувача через діалогове вікно prompt і зберігаємо її в змінну dateOfBirth

  const [day, month, year] = dateOfBirth.split('.').map(Number);
  // Розділяємо введену дату на день, місяць і рік, перетворюємо кожну частину на число

  const birthday = new Date(year, month - 1, day);
  // Створюємо об'єкт Date на основі введеної дати народження

  const newUser = {
    // Створюємо об'єкт newUser з полями firstName, lastName, birthday і методами getLogin, getAge та getPassword
    firstName,
    lastName,
    birthday,
    getLogin() {
      // Метод для отримання логіну користувача
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
      // Логін складається з першої літери імені та повного прізвища, переведених у нижній регістр
    },
    getAge() {
      // Метод для отримання віку користувача
      const currentYear = new Date().getFullYear();
      // Отримуємо поточний рік
      return currentYear - this.birthday.getFullYear();
      // Вираховуємо вік, віднімаючи рік народження від поточного року
    },
    getPassword() {
      // Метод для отримання паролю користувача
      return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.getFullYear();
      // Пароль складається з першої літери імені (в верхньому регістрі), повного прізвища (в нижньому регістрі) та року народження
    }
  };

  return newUser;
  // Повертаємо об'єкт newUser
}

const user = createNewUser();
// Викликаємо функцію createNewUser і зберігаємо результат у змінну user

console.log(user.getLogin());
// Виводимо логін користувача у консоль, викликаючи метод getLogin на об'єкті user

console.log(user.getAge());
// Виводимо вік користувача у консоль, викликаючи метод getAge на об'єкті user

console.log(user.getPassword());
// Виводимо пароль користувача у консоль, викликаючи метод getPassword на об'єкті user
