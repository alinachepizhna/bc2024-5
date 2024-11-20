// Імпортуємо необхідні модулі
const express = require('express');
const commander = require('commander');

// Створюємо інстанс програми commander
const program = new commander.Command();

// Визначаємо необхідні параметри
program
  .version('1.0.0')
  .requiredOption('-h, --host <host>', 'адреса сервера')  // Параметр для хоста
  .requiredOption('-p, --port <port>', 'порт сервера')    // Параметр для порту
  .requiredOption('-c, --cache <cache>', 'шлях до кешу')  // Параметр для шляху до кешу
  .parse(process.argv);

// Отримуємо значення параметрів
const { host, port, cache } = program.opts();

// Перевірка на наявність всіх обов'язкових параметрів
if (!host || !port || !cache) {
  console.error('Всі параметри -h, -p та -c є обовʼязковими');
  process.exit(1);
}

// Створюємо екземпляр Express додатку
const app = express();

// Визначаємо простий маршрут для перевірки роботи сервера
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Запускаємо сервер на вказаному хості та порту
app.listen(port, host, () => {
  console.log(`Сервер працює на http://${host}:${port}`);
});
